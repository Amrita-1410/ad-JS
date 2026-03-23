//2. Write a program to count how many times each 
// element appears in an array.
let arr=[1,2,3,5,6,2,3,1,1]
let count = {};

for (let i = 0; i < arr.length; i++) {
    let b = arr[i];
    if (count[b]) {
        count[b] += 1;
    } else {
        count[b] = 1; 
    }
}

console.log(count);