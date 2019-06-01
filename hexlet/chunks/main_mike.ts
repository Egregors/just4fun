type Data = string | number;
type Chunks = string[] | number[];

export function chunks(arr: Data[], chunkSize: number): Chunks {
    const chunkList = [];
    let currentChunk = [];

    arr.forEach((item, index) => {
        currentChunk.push(item);

        if (currentChunk.length === chunkSize || index === arr.length - 1) {
            chunkList.push(currentChunk);
            currentChunk = [];
        }
    });

    return chunkList;
}

console.log(chunks([1, 2, 3, 4, 5, 6, 7], 99));

// [1, 2, 3, 4, 5] 0 -> 5 => len(arr) 