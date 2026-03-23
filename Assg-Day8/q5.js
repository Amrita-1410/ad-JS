//5. Write a program to find the index of the first 
// occurrence of a given element in an array.

// let arr = [5, 10, 15, 20, 10];
// let a = 20;

// let index = arr.indexOf(a);

// console.log(index);
let arr = [5, 10, 15, 20, 10];
let element = 20;

let index = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
        index = i;
        break; 
    }
}
if (index !== -1) {
    console.log(index);
} else {
    console.log("Element not found");
}