//Let 
// Introduced in ES6
//BLOCK SCOPED {WORKS ONLY INSIDE THE BLOCK {} WHERE IT'S DEFINED.}
//Can be updated but not redeclared in the same scope.
// let y = 5;
// y = 15;// allowed
// let y = 12;
if (true){
    let y = 12
    // let y = 12;
    console.log(y);
}
