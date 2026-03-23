//1. Write a program that finds the largest and 
// smallest elements in an array.
let a = [55,42,5,20,14];
let lar = a[0];
let sml = a[0];

for (let i = 0; i < a.length; i++) {
    if (a[i] > lar) {
        lar = a[i];
    }
 
    if (a[i] < sml) {
        sml = a[i];
    }
}
 
console.log("Largest Number->", lar);
console.log("Smallest Number->", sml);