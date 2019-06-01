// 

const f = (l, n) => (l.length <= n ? [l] : [l.slice(0, n), ...f(l.slice(n), n)])

// chunk = lambda array, size: [array[i:i+size] for i in range(0, len(array), size)]

console.log(f(["a", "b", "c", "d", "e"], 2));
console.log(f(['a', 'b', 'c', 'd'], 3));
console.log(f(['a', 'b', 'c', 'd', 'e', 'f'], 2));
console.log(f(['a', 'b', 'c', 'd', 'e', 'f'], 10));
console.log(f(['a', 'b', 'c', 'd', 'e', 'f'], 1));

// [1, 2, 3, 4, 5] 2 -> 3 => len(l) / n 
