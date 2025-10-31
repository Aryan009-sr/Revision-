// Javascript is synchronous, single threaded, Interpreted, dynamically typed and weakly typed programming language.

//Execution Context

//1. Whenever a javascript code runs a global execution context is created.[GEC]
//2. This Global execution context is divided into two phases:
//A. Memory Creation Phase &  B. Code Execution Phase.

//3. Role of MCP is allocate memory to all of the variables and functions.
//4. This allocation takes place before even a single line of code is executed that is prior to the Code execution phase.

//5. Role of CEP is to execute the code line by line as soon as the we are done with the MCP.
//6.Whenever a function is called, a new execution is created , having the same name that is of the function.

//7. All of the js code is running because of callstack which exists inside the browser.
//8. Everytime the GEC is created a global object namely windows is also created along with it.


var a = 20;
var b = 30;
console.log(a);
console.log(b);

function name() {
    var n = true;
    console.log(n);
}

name();