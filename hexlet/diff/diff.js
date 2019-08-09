import _ from "lodash";

// todo:
//  - [ ] stringify - to convert node to JSON | string
//
// cases:
//  k: v -> k: v   =    k: v
//  k: v -> k: v2  =  - k: v
//                    + k: v2
//  k: v -> -      =  - k: v
//  -    -> k: v   =  + k: v
//

// helpers
const getKeys = (a, b) => new Set(Object.keys(a).concat(Object.keys(b)));

export const getDiff = (before, after) => {
    const keys = getKeys(before, after);

    const f = (acc, el) => {
        // console.log(`${acc} : ${el}`);
        // todo: dispatch this

        if (!_.has(after, el)) {
            //  k: v -> -      =  - k: v
            return { ...acc, [`- ${el}`]: before[el] };
        }

        if (!_.has(before, el)) {
            // -    -> k: v   =  + k: v
            return { ...acc, [`+ ${el}`]: after[el] };
        }

        if (_.has(before, el) && _.has(after, el)) {
            //  k: v -> k: v   =    k: v
            //  k: v -> k: v2  =  - k: v
            //                    + k: v2
            return before[el] === after[el]
                ? { ...acc, [el]: before[el] }
                : { ...acc, [`- ${el}`]: before[el], [`+ ${el}`]: after[el] };
        }

        return acc;
    };

    return [...keys].reduce(f, {});
};

export default getDiff;

const b = {
    host: "hexlet.io",
    timeout: 50,
    proxy: "123.234.53.22",
    follow: false
};
const a = {
    timeout: 20,
    verbose: true,
    host: "hexlet.io"
};

const r = getDiff(b, a);
console.log(r);
