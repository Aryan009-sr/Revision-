// Scopes

// if (true ) {
//     console.log(a, "1");
//     var a = 10;
//     console.log(a, "2");
// }
// console.log(a, "3");// var is a global scope in if block therefore it can be accessed with this console statement
// var a = 100;
// console.log(a, "4");

if ( true ) {
    console.log(a , "1");
    var a = 10;
    console.log(a, "2");
}
console.log(a, "3");
let a = 100;// Error as "a " is already been declared
console.log(a, '4');

// function foo(){
//     a = 100;
//     console.log(a);
//     var a = 10;
//     var a = 200;
//     console.log(a);
// }
// console.log(a);
// var a = 300;
// foo()
// console.log(a);


//CLOSURES --IMPP

//WHENEVER YOU RETURN A FUNCTION FROM A FUNCTION,  THAT FUNCTION IS NEVER RETURNED ALONE, IT IS ALWAYS RETURNED WITH ITS DEPENDENT LEXICAL ENVIRONMENT / SCOPE- THEY BOTH ARE THE SAME THING.
//CLOSURE IS ALWAYS INCLUDED WHENVER A FUNCTION IS RETURNED AND THAT IS WHY IT IS DIFFERENT FROM SCOPE.

//A simple example

// function abc(){
//     var a = 100;
//     let b = 200;
//     const c = 300;

//     function printAbc(){
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     return printAbc
// }

// let myFunc = abc();
// myFunc();

// NEW TOPIC-- CONSTRUCTOR FUNCTIONS.
function remote( name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("I am greet!!!");
    }
}
let user1 = new remote("Prakhar", 21);
let user2 = new remote("Singh", 27);
console.log(user1);
console.log(user2);