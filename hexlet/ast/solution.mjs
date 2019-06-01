const singleTagsList = new Set(["hr", "img", "br"]);

// test data
const data = ['html', [
  ['meta', { id: 'uniq-key' }, [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', [
    ['br'],
  ]],
]];

const parse = arr => {
  const [name, ...attrs] = arr;
  let attributes = {},
    body = "",
    children = [];

  for (let i = 0; i < attrs.length; i++) {
    let attr = attrs[i];

    switch (typeof attr) {
      case "string":
        body = attr;
        break;
      case "object":
        if (attr instanceof Array) {
          children = attr.map(e => parse(e));
        } else {
          attributes = attr;
        }
        break;
    }
  }

  return { name, attributes, body, children };
};

const render = n => {
  const tagName = n.name;
  const tagAttrs = Object.keys(n.attributes).map(e => ` ${e}="${n.attributes[e]}"`);

  if (singleTagsList.has(n.name)) {
    return `<${n.name}${tagAttrs}>`;
  }

  const tagChildren =
    n.children.length > 0
      ? n.children.reduce((acc, el) => acc + render(el), "")
      : "";

  return `<${tagName}${tagAttrs}>${n.body}${tagChildren}</${tagName}>`;
};

// main
const ast_data = parse(data);
console.log(ast_data);
console.log("\n");
const html = render(ast_data);
console.log(html);
