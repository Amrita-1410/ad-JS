//5. Write a program that finds the intersection 
// of two arrays.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7,8];

let int = [];

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            if (!int.includes(arr1[i])) {
                int.push(arr1[i]);
            }
        }
    }
}

console.log(int); 