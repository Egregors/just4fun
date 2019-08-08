import getDiff from "../diff";

test("getDiff", () => {
    const before = {
        common: {
            setting1: "Value 1",
            setting2: "200",
            setting3: true,
            setting6: {
                key: "value"
            }
        },
        group1: {
            baz: "bas",
            foo: "bar",
            nest: {
                key: "value"
            }
        },
        group2: {
            abc: "12345"
        }
    };
    const after = {
        common: {
            follow: false,
            setting1: "Value 1",
            setting3: {
                key: "value"
            },
            setting4: "blah blah",
            setting5: {
                key5: "value5"
            },
            setting6: {
                key: "value",
                ops: "vops"
            }
        },

        group1: {
            foo: "bar",
            baz: "bars",
            nest: "str"
        },

        group3: {
            fee: "100500"
        }
    };
    const diff = {
        common: {
            "+ follow": false,
            setting1: "Value 1",
            "- setting2": 200,
            "- setting3": true,
            "+ setting3": {
                key: value
            },
            setting6: {
                key: value,
                "+ ops": vops
            },
            "+ setting4": "blah blah",
            "+ setting5": {
                key5: value5
            }
        },
        group1: {
            "+ baz": "bars",
            "- baz": "bas",
            foo: "bar",
            "- nest": {
                key: value
            },
            "+ nest": "str"
        },
        "- group2": {
            abc: 12345
        },
        "+ group3": {
            fee: 100500
        }
    };

    expect(getDiff(before, after)).toEqual(diff);
});