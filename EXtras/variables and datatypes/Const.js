// Const datatypes
// Introduced in ES6
//const is also BlockScoped
//Cannot be redeclared or reassigned 
//Must be initialized when declared


const x = 20;
function ConsoleConst(){
    const x = 30;
    // const x = 230;// Cannot be redeclared
    console.log(x);
}
ConsoleConst();
console.log(x);