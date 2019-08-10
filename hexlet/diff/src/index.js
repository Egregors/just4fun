import _ from "lodash";
import { getKeys, diffToObj } from "./utils";

//  cases
//  =====
//  k: v -> k: v   =    k: v    – equal
//  k: v -> k: v2  =  - k: v    – updated
//                    + k: v2
//  k: v -> -      =  - k: v    – removed
//  -    -> k: v   =  + k: v    – added

//  todo:
//  k[v] -> k: [v] =  inline    – inline
const dispatcher = [
    {
        type: "equal",
        check: (k, before, after) => before[k] === after[k],
        apply: (before, after) => ({ val: before })
    },
    {
        type: "added",
        check: (k, before, after) => !_.has(before, k),
        apply: (before, after) => ({ val: after })
    },
    {
        type: "removed",
        check: (k, before, after) => !_.has(after, k),
        apply: (before, after) => ({ oldVal: before })
    },
    {
        type: "updated",
        check: (k, before, after) => before[k] !== after[k],
        apply: (before, after) => ({ val: after, oldVal: before })
    },
    {
        // todo:
        type: "inline",
        check: () => false,
        apply: () => {}
    }
];

const getDiff = (before, after) => {
    const keys = getKeys(before, after);
    return keys.map(k => {
        const { type, apply } = _.find(dispatcher, e =>
            e.check(k, before, after)
        );
        return { k, type, ...apply(before[k], after[k]) };
    });
};

export default (a, b) => diffToObj(getDiff(a, b));

// const a = {
//     timeout: 20,
//     verbose: true,
//     host: "hexlet.io"
// };

// const b = {
//     host: "hexlet.io",
//     timeout: 50,
//     proxy: "123.234.53.22",
//     follow: false
// };

// const r = getDiff(a, b);
// console.log('diff:');
// console.log(r);

// const sRes = diffToObj(r);
// console.log('obj:');
// console.log(sRes);

// console.log('json:');
// console.log(JSON.stringify(sRes));
