// Loops let you repeat the code multiple times over and over without actually writing it again.

// for syntax t
// for (let initializtion; termination condition; increment/decrement){
    //further code to run 
// }

// exmaple
// for (let i = 0; i <= 5; i++ ){
//     console.log(i);
// }

//while loop
// let i = 1
// while(i <= 5){
//     console.log(i);
//     i++
// }

// d.. while loop
// let d = 6;
// do {
//     console.log(d);
//     d++;
// } while (d <= 5);

// for of loop
// iterates over values of iterable objects[arrays, strings]

// let arr = [12,13,15];
// for (let value of arr){
//     console.log(value);
// }

// let fruits = ["apple", "banana", "orange","kiwi"];
// for (let fruit of fruits){
//     console.log(fruit);
// }

// let cars = ['ferrari', 'lamborghini', 'bentley', 'rangerover'];
// for(let car of cars) {
//     console.log(car);
// }

// FOR IN LOOP
//Iterates over key properties of an object
//for...in
// let person = {name: "Aryan", age: 27};
// for (let key in person ){
//     console.log(key, person[key]);
// }


//EXERCISES
//PRINT EVEN NUMBERS FROM 1 TO 20

// for (let i = 0; i <= 20; i+=2){
//     console.log(i);
// }

//SUM OF ALL NUMBERS FROM 1 TO 50
// let sum = 0;
// for (let i = 1; i <= 50; i++){
//     sum+= i;
// }
// console.log(sum)

//without using loop
// let n = 50;
// let sum = (n * (n + 1))/2;
// console.log(sum);

//Iterate over an array
// const arr = [1,2,3,4,5]
// for (let value of arr) {
//     console.log(value * value);
// }

//Print tables
// let num = 5;
// for (let i = 1; i <= 20;i++ ){
//     console.log(`${num} * ${i} = ${num * i}`);
// }

// for (let num = 2; num <= 5; num++) {
//     console.log(`\nMultiplication Table of ${num}`);
//     for (let i = 1; i <= 10; i++){
//         console.log(`${num} * ${i} = ${num * i}`);
//     }
// }

//Patterns
// Simple square
// for (let i = 1; i <= 4; i++){
//     let row = "";
//     for (let j = 1; j <= 5; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// Right angled triangle
// for (let i = 1; i <= 5; i++){
//     let row = "";
//     for (let j = 1; j <= i; j++){
//         row += "*";
//     }
//     console.log(row);
// }

// Pattern 3. Inverted triangle
// for (let i = 6; i >= 1; i--){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += "*"; 
//     }
//     console.log(row);
// }
