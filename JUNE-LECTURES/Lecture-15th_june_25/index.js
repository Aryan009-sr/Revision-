
// FOR...OF is used for Arrays

// const arr = [33,2,2,1,5,6,45,67];
// const rightArr = arr.sort((a, b)=> a - b);
// console.log(rightArr);
// const reversedArr = arr.sort((a,b) => b - a);
// console.log(reversedArr);
// for (let value of rightArr){
//     console.log(value);
// }

// for (let item of reversedArr){
//     console.log(item);
// }



// FOR...IN is used for iterating over objects properties
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   },
//   greet: function() {
//     console.log("Hello, my name is " + this.fullName());
//   }
// };

// person.greet();

// const person = {
//     firstName: "Prakhar",
//     lastName: "Singh",
//     age: 27,
//     fullName:function (){
//         console.log("Hello my full name is :", this.firstName + " " + this.lastName)
//     }
// }
// person.fullName();

//Learning VAR, LET AND CONST DECLARATIVES
//Var 
// var a = 100;
// console.log(a);
// var a = 200;
// console.log(a);
// a = 300;
// console.log(a);

//let
// let a = 10;
// console.log(a);
// // let a = 20;
// // console.log(a);// Error as a has already been declared as Redeclaration is not allowed
// a = 20;
// console.log(a);//Re initializing the value is possible


// Const 
// const a = 100;
// console.log(a);
// const a = 200;
// console.log(a);// Redeclaration error as it is not allowed
// a = 200;
// console.log(a);// Re-initialization is not allowed in const

// const a;
// a = 100;
// console.log(a);//Error:-- const should be always initialized along with declaration.