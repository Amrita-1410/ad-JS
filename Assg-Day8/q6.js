//6. Write a program that joins all elements of 
// an array into a single string separated by commas.
let arr = ["I","am","a","learner"];
let x = "";

for (let i = 0; i < arr.length; i++) {
    x += arr[i];          
    if (i < arr.length - 1) {
        x += ",";         
    }
}

console.log(x);