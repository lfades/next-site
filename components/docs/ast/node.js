import { createElement } from 'react';
import handlers from './handlers';

const defaultHandler = name => (props, components) => {
  const Comp = components[name];
  return Comp ? <Comp {...props} /> : createElement(name, props);
};

function handleNode(node, components, key) {
  if (typeof node === 'string') {
    return node;
  }

  const hasNodes = Array.isArray(node[1]);
  const tag = node[0];
  const nodes = hasNodes ? node[1] : null;
  const nodeProps = hasNodes ? node[2] : node[1];
  const handler = handlers[tag] || defaultHandler(tag);
  const props = { ...nodeProps, key };

  if (nodes?.length) {
    props.children = nodes.map((n, i) => handleNode(n, components, i));
  }

  const element = handler(props, components, node, key);

  // eslint-disable-next-line no-console
  if (!element) console.error('A handler returned null for:', node);

  return element;
}

export default function Node({ components, node }) {
  return handleNode(node, components);
}
