//4. Write a program to find the sum and average of 
//all numbers in an array.
let arr = [10,12,30,40,50,60];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

let average = sum / arr.length;

console.log("Sum:", sum);
console.log("Average:", average);