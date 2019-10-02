import { NextApiRequest, NextApiResponse } from 'next';
import nodeFetch from 'node-fetch';
import zeitFetch from '@zeit/fetch';
import mql from '@microlink/mql';
import { mapping } from '../../showcase-manifest';

const fetch = zeitFetch(nodeFetch);
const showcases = mapping as {
  [id: string]:
    | {
        title: string;
        link: string;
        src: string;
        width: number;
        height: number;
        internalUrl: string;
        tags?: string[];
      }
    | undefined;
};

export default async function screenshot(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { showcaseId } = req.query;

    if (Array.isArray(showcaseId)) {
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

    const mqlStart = process.hrtime();
    const { status, data } = await mql(showcase.link, {
      apiKey: process.env.MICROLINK_API_KEY,
      screenshot: true,
      meta: false,
      // Some sites are very fancy and even their backgrounds are animations
      disableAnimations: false,
      waitUntil: 'load',
      type: 'jpeg',
      deviceScaleFactor: 2,
      // Wait for slow sites (and their fancy but slow animations)
      waitFor: 4000,
      width: 1920,
      height: 1080
    });
    const mqlTime = process.hrtime(mqlStart);

    if (status !== 'success') {
      return res.status(403).send({
        error: { code: 'screenshot_failed', message: 'Screenshot failed' }
      });
    }

    const pipeStart = process.hrtime();
    const screenshotUrl = data.screenshot.url;
    const screenshot = await fetch(screenshotUrl);
    const contentType = screenshot.headers.get('content-type');
    const contentLength = screenshot.headers.get('content-length');

    // Cache the images for 2 months
    res.setHeader('cache-control', 'immutable,max-age=5184000');

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
