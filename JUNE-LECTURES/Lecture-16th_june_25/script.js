//Hoisting
//What is hoisting?
// Hoisting is concept where you try to access a particular variable or function before it has been declared.
//Example

// console.log(a);//undefined
// var a = 10;
// console.log(a);//10

// name();
// function name(){
//     console.log(b);// undefined
//     var b = 20;
//     console.log(b);//20
// }
// here we are accessing a and b before it has been declared and therefore it prints the value undefined.
// in case of function hoisting works perfectly fine.

//In case if we are using let and const for hoisting purpose than we would get an error stating that the value is not declared as the value remains in the temporal dead zone the environment between MCP and CEP.
//Example
// console.log(ab);
// let ab = 120;//ReferenceError: Cannot access 'ab' before initialization

//That would be all for hoisting.

// Next topics 
// HOF-HIGHER ORDER FUNCTIONS
// CALLBACK FUNCTIONS


//HOF- HIGHER ORDER FUNCTIONS
//DEFINITION -- WHENEVER A PARTICULAR FUNCTION CAN ACCEPT ANOTHER FUNCTION AS AN ARGUMENT OR IF THE PARTICULAR FUNCTION IS RETURNING ANOTHER FUNCTION, THEN THAT FUNCTION IS CALLED AS HIGHER ORDER FUNCTION.


// //EXAMPLE:1- function as an argument
// function a(x){
//     console.log("I am a higher order function")
//     x();
// }
// function b(){
//     console.log("I am being passed as an argument to another function");
// }
// a(b);

// function calc(a, b, operation){
//     return operation(a, b);
// }
// function add(x, y){
//     return x + y;
// }
// function mult(c,d){
//     return c * d;
// }
// console.log(calc(4,5,add));
// console.log(calc(5,6,mult));

// //Example:2 -- returning a function
// function c(){
//     console.log("I am higher order function");
//     function d(){
//         console.log("I am being returned.")
//     }
//     return d;
// }
// c(d)



//CALLBACK FUNCTION
//A callback function is simply a function that is passed as an argument to another function and is later executed inside that function.
//Example:
// function greet(name, callback){
//     console.log("Hello, " + name);
//     callback();
// }
// function goodbye(){
//     console.log("Goodbye");
// }
// greet("Prakhar", goodbye);
// //here in the above example we have passed callback function goodbye as an argument.



//ARRAY METHODS

// let arr = [10,20,30,40,50];
// let pushArr = arr.push(60);
// console.log(pushArr);//Push method gives the length of the new array
// console.log(arr);


// let popArr = arr.pop();
// console.log(popArr);// Pop method returns the popped value from the array

// let unshiftArr = arr.unshift(100, 200, 300)
// console.log(unshiftArr);// Unshift as well returns the length of the new array
// console.log(arr);// mutated array

// let shiftedArr = arr.shift(); 

//Arrays -HOF- methods[map, forEach, filter, reduce, some, every, find]-Today's target.

// let arr = [10, 20, 30]
// let newArr = arr.forEach((item, index) =>console.log(item + index) );
// console.log(newArr);

// const users = [
//   { id: 1, name: 'Alice',   age: 25, active: true,  score: 85 },
//   { id: 2, name: 'Bob',     age: 17, active: false, score: 58 },
//   { id: 3, name: 'Charlie', age: 30, active: true,  score: 95 },
//   { id: 4, name: 'Diana',   age: 22, active: false, score: 67 },
//   { id: 5, name: 'Evan',    age: 40, active: true,  score: 73 }
// ];

// users.forEach((user,index) => {
//     const status = user.active ? "active": "inactive";
//     console.log(`${index + 1}. ${user.name}, ${user.age} - ${status}`);
// });


//MAP method
// const result = users.map((user) => {
//     return `${user.name} - ${user.score}`; 
// })
// console.log(result);

// FILTER METHOD
// PRINT USERS WHO ARE ACTIVE I.E ACTIVE: TRUE && SCORE > 70
// const result = users.filter((user) => user.active && user.score > 70);
// console.log(result);

//REDUCE method
// const total = users.reduce((acc, curr) => {
//     return acc + curr.score;
// }, 0);
// console.log(total);

//SOME method - check if atleast one element passes the condition
// const result = users.some(user => user.score < 80);
// console.log(result);
// //EVERY METHOD = checks if every element passes the condition.
// const everyyElement = users.every(user => user.age > 18);
// console.log(everyyElement);
// //FIND method -- returns first element that matches the condition
// const activeUser = users.find(user => user.active);
// console.log(activeUser);

// const userUnder20 = users.some(user => user.age < 20)
// console.log(userUnder20);

// const scoreAbove50 = users.every(user => user.score > 50);
// console.log(scoreAbove50);

// const userInactive = users.find(user => user.active === false);
// console.log(userInactive);


//Practice exercises
const users = [
  { id: 1, name: 'Alice',   age: 25, active: true,  score: 85 },
  { id: 2, name: 'Bob',     age: 17, active: false, score: 58 },
  { id: 3, name: 'Charlie', age: 30, active: true,  score: 95 },
  { id: 4, name: 'Diana',   age: 22, active: false, score: 67 },
  { id: 5, name: 'Evan',    age: 40, active: true,  score: 73 }
];

// const activeUsers = users.filter(user => user.active);
// const highScoreUsers = activeUsers.filter(user => user.score > 80).map(user => `${user.name} (Score: ${user.score})`)
// const total = highScoreUsers.reduce((acc, curr) => {
//     return acc + curr.score;
// }, 0);
// console.log(total); // My approach which is partially correct.

// const displayNames = users
//     .filter(user => user.active && user.score > 80)
//     .map(user => `${user.name} (Score: ${user.score})`);

// const total = users
//     .filter(user => user.active && user.score > 80)
//     .reduce((acc, user) => acc + user.score, 0);

// console.log(displayNames);
// console.log(total);

//Listing Group users by active inactive status

// const groupedUsers = users.reduce((acc, user) => {
//     if (user.active){
//         acc.active.push(user.name)
//     } else {
//         acc.inactive.push(user.name);
//     }
//     return acc;
// }, { active: [], inactive: []});
// console.log(groupedUsers);

// Find the user with the highest score
// const highestScoreUser = users.reduce((acc, user) => {
//     return (user.score > acc.score) ? user : acc
// }, users[0]);
// console.log(highestScoreUser);

//Find the user with the lowest score
// const lowestScoreUser = users.reduce((acc, user) => {
//     return (user.score < acc.score) ? user : acc;
// }, users[0]);
// console.log(lowestScoreUser);

// const totalScore = users.reduce((acc, user) => {
//     return acc + user.score;
// },0);
// console.log(totalScore);
// const averageScore = totalScore / users.length;
// console.log(averageScore);