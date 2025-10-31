//This keyword

//The direct function calling
//Object calling
//contructor calling
//Arrow function calling
//indirect function calling

//THE DIRECT FUNCTION CALLING
// function fn(){
//     console.log(this);
// }
// fn(); // Global object -> window is shown in browser and in node it will show empty object.

// OBJECT CALLING  - this keyword will point to the object itself.
// let obj = {
//     a: 10,
//     b: 20,
//     fn: function(){
//         console.log(this);
//     }
// }

// obj.fn(); // it will show the object itself

//Example 2
// let obj = {
//     a: 10,
//     b: 20,
//     fn: function(){
//         console.log(this);
//     }
// }
// let result = obj.fn;
// result(); // it will show global object because the function is called directly not through object.


// let obj2 = {
//     a: 100,
//     b: 200,
//     fn: function(){
//         function inner(){
//             console.log(this);
//         }
//         inner();
//     }
// }
// obj2.fn();// it will show global object because inner function is called directly not through object.

// let obj3 = {
//     a: 100,
//     b: 200,
//     abc: function(){
//         console.log(this, "1");
//         function inner(){
//             console.log(this, "2");
//         }
//         inner();
//     }
// }
// obj3.abc();

// CONSTRUCTOR CALLING
// function Person(){
//     this.a = "Prakhar";
//     this.b = 25;
// }

// let p1 = new Person();
// console.log(p1); // it will show the object created by constructor function Person with properties a and b.

// ARROW FUNCTION CALLING

// const arrowfn = () => {
//     console.log(this);
// }
// arrowfn();

// it will show the global object because arrow function does not have its own this keyword, it takes this from its surrounding context which is global here.

// const cubeOfNumber = (num)=> num * num * num;
// console.log(cubeOfNumber(9));

// const addNumbers = (a, b) =>  a + b;
// console.log(addNumbers(10, 20));

// const greet = () => "Hello, World!";
// console.log(greet());

// const obj = {
//     a: 100,
//     fn: () => {
//         console.log(this);
//         function inner(){
//             console.log(this);
//         }
//         inner();
//     }
// }

// obj.fn(); // it will show global object inboth cases because arrow function does not have its own this keyword so it takes this from surrounding context which is global here. 

//Indirect function calling

// function fn(){
//     console.log(this);
// }
// let obj = {
//     a: 10,
//     b: 20,
// }
// fn.call(obj); // it will show the obj because we are calling the function fn with obj using call method.
// fn.apply(obj); // it will show the obj because we are calling the function fn with obj using apply method.
// let boundFn = fn.bind(obj);
// boundFn(); // it will show the obj because we are calling the function fn with obj using bind method.

// let obj1 = {
//     a: 10,
//     fn: function(x, y){
//         console.log(this.a, x, y);
//     }
// }

// let obj2 = {
//     a: 20,
// }

// obj1.fn();
// obj1.fn.call(obj2, 100, 200); // here we can pass the arguments directly after the object
// obj1.fn.apply(obj2, [300, 500]); // here we have to pass the arguments in array form
// let boundFn = obj1.fn.bind(obj2, 700, 800); // here we can pass the arguments directly after the object
// boundFn();
// so the difference between call, apply and bind is that call and apply will call the function immediately whereas bind will return a new function which can be called later.
