//Primitive data types (Are directly stored in memory)
//number data type
let number = 24;
console.log(typeof(number));

//String
let name = "Prakhar";
console.log(typeof(name));

//Boolean 
let isStudent = true;
console.log(typeof(isStudent));

// Null 
let data = null;
console.log(typeof(data));

// Undefined
let info;
console.log(typeof(info));

//symbol 
let sym = Symbol('id');// Unique values
console.log(typeof(sym));

//Bigint
let bigi = 12345678901234565n;
console.log(typeof(bigi));


// Non-primitive data type
// [ object, array , function ]

let person = {
    name: 'Aryan',
    age: 27,
    role: 'Frontend developer'
}
console.log(person);
console.log('This is the object data type.')

//Array datatypes
let nums = [12,32,42,52,53,23,12]
console.log(typeof(nums));

// function datatype

function datatypess() {
    console.log("This is function datatype but still be shown as an Object, because in javascript everything is an object. ")
}
datatypess();
