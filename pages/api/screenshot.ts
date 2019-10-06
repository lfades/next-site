import { NextApiRequest, NextApiResponse } from 'next';
import nodeFetch from 'node-fetch';
import zeitFetch from '@zeit/fetch';
import mql from '@microlink/mql';
import { mapping } from '../../showcase-manifest';

const BACKEND_URL =
  process.env.NODE_ENV === 'production' ? process.env.BACKEND_URL : 'http://localhost:3000';
const fetch = zeitFetch(nodeFetch);
const showcases = mapping as {
  [id: string]:
    | {
        title: string;
        link: string;
        src?: string;
        internalUrl: string;
        tags?: string[];
      }
    | undefined;
};

function getScaleFactor(size: string) {
  switch (size) {
    // 768 x 432
    case 'small':
      return 0.4;
    // 1920 x 1080
    case 'medium':
      return 1;
    // 4K
    default:
      return 2;
  }
}

export default async function screenshot(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { showcaseId, size } = req.query;

    if (Array.isArray(showcaseId) || Array.isArray(size)) {
      return res.status(400).json({ error: { code: 'bad_request' } });
    }

    if (!showcaseId) {
      return res.status(400).json({
        error: {
          code: 'bad_request',
          message: 'showcaseId is missing in query parameters'
        }
      });
    }

    const showcase = showcases[showcaseId];

    if (!showcase) {
      return res.status(400).json({
        error: {
          code: 'bad_request',
          message: `${showcase} is not a known showcase`
        }
      });
    }

    let screenshotUrl: string | undefined;
    const mqlStart = process.hrtime();

    // Only use mql in production to avoid wasting all the free requests, you can change this to
    // test it on localhost, be aware that a single request to /showcases can take all your requests
    if (process.env.NODE_ENV === 'production' && !showcase.src) {
      try {
        const { status, data } = await mql(showcase.link, {
          apiKey: process.env.MICROLINK_API_KEY,
          screenshot: true,
          meta: false,
          // Some sites are very fancy and even their backgrounds are animations
          disableAnimations: false,
          waitUntil: 'load',
          type: 'jpeg',
          deviceScaleFactor: getScaleFactor(size),
          force: true,
          // Wait for slow sites (and their fancy but slow animations)
          waitFor: 3000,
          width: 1920,
          height: 1080
        });

        if (status !== 'success') {
          return res.status(403).send({
            error: { code: 'screenshot_failed', message: 'Screenshot failed' }
          });
        }

        screenshotUrl = data.screenshot.url;
      } catch (error) {
        // In the case of an error with mql, log the error and use the default image
        console.error(error);
      }
    }

    if (!screenshotUrl) {
      const src = showcase.src || '/static/images/showcases/404.png';
      screenshotUrl = BACKEND_URL + src;
    }

    const mqlTime = process.hrtime(mqlStart);
    const pipeStart = process.hrtime();
    const screenshot = await fetch(screenshotUrl);
    const contentType = screenshot.headers.get('content-type');
    const contentLength = screenshot.headers.get('content-length');

    // Cache the images for 1 day
    res.setHeader('cache-control', 's-maxage=86400,stale-while-revalidate');

    if (contentType) {
      res.setHeader('content-type', contentType);
    }
    if (contentLength !== null) {
      res.setHeader('content-length', contentLength);
    }

    res.status(200);

    screenshot.body.pipe(res);

    res.on('finish', () => {
      const pipeTime = process.hrtime(pipeStart);
      console.info(
        'generated screenshot for %s, mql time: %ds%dms, pipe image time: %ds%dms',
        screenshotUrl,
        mqlTime[0],
        mqlTime[1] / 1000000,
        pipeTime[0],
        pipeTime[1] / 1000000
      );
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: { code: 'internal_server_error', message: 'Screenshot failed' }
    });
  }
}
