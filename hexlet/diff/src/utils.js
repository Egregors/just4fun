import _ from "lodash";

export const getKeys = (...objects) => {
    return [
        ...new Set(objects.reduce((acc, el) => acc.concat(Object.keys(el)), []))
    ];
};

export const diffToObj = diff => {
    const actions = {
        equal: (acc, { k, val }) => ({ ...acc, [`${k}`]: val }),
        added: (acc, { k, val }) => ({ ...acc, [`+ ${k}`]: val }),
        removed: (acc, { k, oldVal }) => ({ ...acc, [`- ${k}`]: oldVal }),
        updated: (acc, { k, val, oldVal }) => ({
            ...acc,
            [`- ${k}`]: oldVal,
            [`+ ${k}`]: val
        })
        // todo: add inline
    };

    return diff.reduce((acc, el) => actions[el.type](acc, el), {});
};
