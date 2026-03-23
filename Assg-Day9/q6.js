//6. Write a program to split an array into chunks 
// of size n.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11];
let chunksofSize = 4;

let chunks = [];

for (let i = 0; i < arr.length; i += chunksofSize) {
    chunks.push(arr.slice(i, i + chunksofSize));
}

console.log(chunks);