// Ways to declare variables

//var// const // let

//
//var = var is an old way of declaring variables
//It is function function scoped or global scoped.
//Can be redeclared and Updated.

var x = 10;
var x = 20;// Redeclared
function Variabel(){
    var x = 30;
    console.log(x);
}
Variabel()