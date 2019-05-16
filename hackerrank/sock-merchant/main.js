const getPairs = l =>
  [...new Set(l)].reduce(
    (acc, el) => (acc += Math.floor(l.filter(e => e === el).length / 2)),
    0
  );

// test
const inputData1 = [1, 2, 1, 2, 1, 3, 2];
const inputData2 = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.assert(getPairs(inputData1), 2);
console.assert(getPairs(inputData2), 3);
