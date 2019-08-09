import getDiff from "../diff";

test("getDiff for one node", () => {
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
    const res = {
        host: "hexlet.io",
        "+ timeout": 20,
        "- timeout": 50,
        "- proxy": "123.234.53.22",
        "+ verbose": true,
        "- follow": false
    };

    expect(getDiff(b, a)).toEqual(res);
});

// test("getDiff for file", () => {
//     const before = {
//         common: {
//             setting1: "Value 1",
//             setting2: "200",
//             setting3: true,
//             setting6: {
//                 key: "value"
//             }
//         },
//         group1: {
//             baz: "bas",
//             foo: "bar",
//             nest: {
//                 key: "value"
//             }
//         },
//         group2: {
//             abc: "12345"
//         }
//     };
//     const after = {
//         common: {
//             follow: false,
//             setting1: "Value 1",
//             setting3: {
//                 key: "value"
//             },
//             setting4: "blah blah",
//             setting5: {
//                 key5: "value5"
//             },
//             setting6: {
//                 key: "value",
//                 ops: "vops"
//             }
//         },

//         group1: {
//             foo: "bar",
//             baz: "bars",
//             nest: "str"
//         },

//         group3: {
//             fee: "100500"
//         }
//     };
//     const diff = {
//         common: {
//             "+ follow": false,
//             setting1: "Value 1",
//             "- setting2": 200,
//             "- setting3": true,
//             "+ setting3": {
//                 key: value
//             },
//             setting6: {
//                 key: value,
//                 "+ ops": vops
//             },
//             "+ setting4": "blah blah",
//             "+ setting5": {
//                 key5: value5
//             }
//         },
//         group1: {
//             "+ baz": "bars",
//             "- baz": "bas",
//             foo: "bar",
//             "- nest": {
//                 key: value
//             },
//             "+ nest": "str"
//         },
//         "- group2": {
//             abc: 12345
//         },
//         "+ group3": {
//             fee: 100500
//         }
//     };

//     expect(getDiff(before, after)).toEqual(diff);
// });
