//3. Create a program to reverse an array without 
// using reverse() method.

let arr = [5,10,20,25,30,35];
let rev = [];

for (let i = arr.length-1 ; i >= 0; i--) {
    rev.push(arr[i]);
}

console.log(rev);