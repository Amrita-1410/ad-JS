//8. Write a program to find all even numbers 
// from an array using filter().
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let e = arr.filter(function(a) {
    return a % 2 === 0;
});

console.log("Even numbers:", e);