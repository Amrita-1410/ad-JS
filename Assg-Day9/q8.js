//8. Write a program to check if all elements in an 
// array are unique.
let arr = [1, 2, 3, 4, 5]
let x = true;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            x = false;
            break;
        }
           
    }
    
}
console.log(x);