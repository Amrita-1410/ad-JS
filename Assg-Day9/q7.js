//7. Write a program that squares each element of 
// an array using map().

let numbers = [2, 3, 4, 5];

let sqnum = numbers.map(function(num) {
    return num * num;
});

console.log(sqnum);