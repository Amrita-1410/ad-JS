//1. Write a program to demonstrate how var, let, and const behave differently when declared inside a loop.

// for (const i = 0; i < 5; i++) {
//   console.log(i);
// }
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// 2. Create a program that shows the difference between 
// function scope of var and block scope of let.

// function test() {
//   {
//     var a = 5
//     let b = 10
//     let x= 15
//     console.log("x=>", x)
//   }

//   console.log("a=>", a)
//   console.log("b=>", b)
// }

// test()

//3. Write a program to prove that re-declaring a 
//variable with var works, but not with let or const.

// function test1(){
//     var a=2
//     let b=5
//     const c=10
//     // console.log("var ",a)
//     // console.log("let ",b)
//     // console.log("const ",c)
// }
// test1()
//    var a=12
//     console.log("var ",a)
//     console.log("let ",b)
//     console.log("const ",c)

//6. Create a program where accessing a let variable before declaration throws a TDZ (Temporal Dead Zone)
//error.

// a()
// let a=10
// console.log(a)
