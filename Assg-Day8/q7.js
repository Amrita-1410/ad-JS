//7. Write a program to merge two arrays and remove 
// duplicates.
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let arrm = [];
for (let i = 0; i < arr1.length; i++) {
    arrm.push(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
    arrm.push(arr2[i]);
}

let x = [];
for (let i = 0; i < arrm.length; i++) {
    if (!x.includes(arrm[i])) {
        x.push(arrm[i]);
    }
}

console.log(x);