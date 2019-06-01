import lodash from 'lodash';
const { identity } = lodash;

// SingleTag.js
// Реализуйте тип SingleTag со следующим интерфейсом:
//     Конструктор, который принимает на вход: name, attributes
//     Метод toString, который возвращает текстовое представление узла (html) на всю глубину.
// Обратите внимание на то что у SingleTag нет body и children
class SingleTag {
    constructor(name, attributes) {
        this.name = name;
        this.attributes = attributes;
    }

    toString() {
        const attrs = Object.keys(this.attributes).map(e => ` ${e}="${this.attributes[e]}"`);
        return `<${this.name}${attrs}/>`;
    }
}

// PairedTag.js
// Реализуйте тип PairedTag со следующим интерфейсом:
//     Конструктор, который принимает на вход: name, attributes, body, children.
//     Метод toString, который возвращает текстовое представление узла (html) на всю глубину.
class PairedTag {
    constructor(name, attributes, body, children) {
        this.name = name;
        this.attributes = attributes;
        this.body = body;
        this.children = children;
    }

    toString() {
        const attrs = Object.keys(this.attributes).map(e => ` ${e}="${this.attributes[e]}"`);
        const children = this.children.reduce((acc, el) => acc.concat(el.toString()), '');
        return `<${this.name}${attrs}>${this.body}${children}</${this.name}>`;
    }
}

// buildNode.js
// Реализуйте и экспортируйте функцию по умолчанию, задача которой, создавать объект подходящего типа. 
// Типы: SingleTag и PairedTag. Список имен тегов, которые относятся к SingleTag: hr, br, img.
const singleTags = new Set("hr", "br", "img");
const buildNode = (name, attributes, body, children) => {
    return name in singleTags ? new SingleTag(name, attributes) : new PairedTag(name, attributes, body, children);
}

// parser.js
const propertyActions = [
    {
        name: "body",
        check: arg => typeof arg === "string",
        process: identity
    },
    {
        name: "children",
        check: arg => arg instanceof Array,
        process: (children, f) => children.map(f)
    },
    {
        name: "attributes",
        check: arg => arg instanceof Object,
        process: identity
    }
];

const getPropertyAction = arg =>
    propertyActions.find(({ check }) => check(arg));

const parse = data => {
    const [first, ...rest] = data;
    const root = {
        name: first,
        attributes: {},
        body: "",
        children: []
    };
    const args = rest.reduce((acc, arg) => {
        const { name, process } = getPropertyAction(arg);
        return { ...acc, [name]: process(arg, parse) };
    }, root);
    return buildNode(args.name, args.attributes, args.body, args.children);
};

// mock 1
const data1 = [
    "html",
    [
        ["head", [["title", "hello, hexlet!"]]],
        [
            "body",
            [
                ["h1", { class: "header" }, "html builder example"],
                ["div", [["span", "span text"], ["hr"]]]
            ]
        ]
    ]
];

// mock 2
const data2 = ['html', [
    ['head', [
      ['title', 'hello, hexlet!'],
    ]],
    ['body', [
      ['div', { class: 'separator' }],
      ['h1', { class: 'header' }, 'html builder example'],
      ['div', [
        ['img', { class: 'image', href: '#' }],
        ['span', 'span text2'],
      ]],
    ]],
  ]];

// main
console.log(parse(data1).toString());
console.log(parse(data2).toString());

// const nodes = buildNode(parse(data));
// console.log(nodes.toString());
