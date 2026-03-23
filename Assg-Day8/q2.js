//2. Write a program that removes all duplicate 
// elements from an array.

let arr = ["John","William","Mike","William","John"];
let x = [];

for (let i = 0; i < arr.length; i++) {
    if (!x.includes(arr[i])) {
        x.push(arr[i]);
    }
}

console.log(x);