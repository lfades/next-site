/**
 * Minifies the AST into something like this:
 * [ node | string ]
 *  ---> node is [tag, nodes, props]
 * tag: HTML tag name, e.g: 'h1', 'p'
 * nodes: array of children nodes
 * props: object with tag attributes
 *
 * Only `tag` is required for elements, nodes that aren't elements (text) are a string
 */
function minifyAst(ast) {
  if (Array.isArray(ast)) {
    return ast.reduce((nodes, node) => {
      const n = minifyAst(node);
      // Empty new lines aren't required
      const isNoise = n === '\n' && nodes[nodes.length - 1]?.[0] !== 'span';

      if (!isNoise) nodes.push(n);

      return nodes;
    }, []);
  }
  // Handle the root ast
  if (!ast.tagName && ast.children) {
    return minifyAst(ast.children);
  }
  if (ast.type === 'text') {
    // Replace non-breaking spaces (char code 160) with normal spaces to avoid style issues
    return ast.value.replace(/\xA0/g, ' ');
  }
  if (ast.type === 'element') {
    const node = [ast.tagName];
    const props = ast.properties;

    if (ast.children?.length) {
      node.push(minifyAst(ast.children));
    }
    if (props && Object.keys(props).length) {
      node.push(
        props.className && Array.isArray(props.className)
          ? // Always add className as a string
            { ...props, className: props.className.join(' ') }
          : props
      );
    }

    return node;
  }

  throw new Error(`Unable to handle the following AST: ${JSON.stringify(ast, null, 2)}`);
}

function rehypeMinify() {
  this.Compiler = tree => minifyAst(tree);
}

export default rehypeMinify;
