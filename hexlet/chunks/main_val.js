function f(arr, limit) {
  const acc = [];
  let index = 0;

  const count = Math.ceil(arr.length / limit);

  for (let i = 0; i < count; i++) {
    const chunk = arr.slice(index, index + limit);
    acc.push(chunk);
    index += limit;
  }

  return acc;
}

// [1, 2, 3, 4, 5] 2 -> 2 => len(arr) / n