import _ from "lodash";

export const getKeys = (...objects) => [
    ...new Set(objects.reduce((acc, el) => acc.concat(Object.keys(el)), []))
];

export const isObject = obj => typeof obj === "object";

const convertNodeMethods = {
    equal: (acc, { k, val }) => ({ ...acc, [`${k}`]: val }),
    added: (acc, { k, val }) => ({ ...acc, [`+ ${k}`]: val }),
    removed: (acc, { k, oldVal }) => ({ ...acc, [`- ${k}`]: oldVal }),
    updated: (acc, { k, val, oldVal }) => ({
        ...acc,
        [`- ${k}`]: oldVal,
        [`+ ${k}`]: val
    }),
    inline: (acc, { k, children }) => ({
        ...acc,
        [`${k}`]: convertNodesToDiffObj(children)
    })
};
export const convertNodesToDiffObj = diff =>
    diff.reduce((acc, el) => convertNodeMethods[el.type](acc, el), {});
