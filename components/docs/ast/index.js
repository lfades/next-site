import Node from './node';

export default function Ast({ ast, components }) {
  return ast.map((node, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <Node key={i} node={node} components={components} />
  ));
}
