//SCOPES

// var a = 10;//global  scope
// console.log(a);
// function func(){
//     var b = 200;// functional scope value;
//     console.log(b);
// }
// func();

// console.log(a);
// var a = 20;

// foo();
// function foo(){
//     var b= 200;
//     console.log(200);
// }

// console.log(a);
// var a = 20;

// foo()
// function foo(){
//     console.log(b);
//     var b = 200;
// }


//---------
// console.log(a);
// let a = 200;

// foo();
// function foo(){
//     console.log(a);
//     let a = 300;
// }


// let a = 20;
// console.log(a);

// foo();
// function foo(){
//     console.log(b);
//     let b = 200;
// }


//-----------
// var a = 20;
// var a = true;
// console.log(a);


// let a = 20;
// let a = true;// Error as cannot redeclare the value
// console.log(a);


// const a = 20;
// const a = 40;// Error as cannot be redeclared and neither could be reinitialized using const declarative
// console.log(a);

// let a = 20;
// a = true;
// console.log(a);


// var a = 10;
// function foo(){
//     console.log(a);// Cause it will look for the variable value in its lexical environment 
// }
// foo();
// console.log(a);

// var a = 10;
// function sam () {
//     var a = 20;
//     console.log(a);
// }
// sam();
// console.log(a);

// var a = 10;
// if(true){
//     var a = 30;// As here the var is still a 'global scope' and the value of a is updated.
//     console.log(a);
// }
// console.log(a);

// var a = 10;
// if(false){
//     a = 30;
//     console.log(a)
// }
// console.log(a);

// let a = [];
// console.log(a);
// console.log(typeof(a));

// if ([] == true){
//     console.log("This is object")
// } else {
//     console.log("This is not an object")
// }

// let obj = {
//     a: {
//         b: undefined
//     }
// }
// console.log(obj.a?.b?.c?.d ?? "Prakhar");// The nullish Coalescing operator (??) returns its right-hand operand if its left hand operand is null or undefined.

// var a = 25;
// if (function foo(){}){
//     a = a + typeof(foo)
// }
// console.log(a);