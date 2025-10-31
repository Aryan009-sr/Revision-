// Logical operators ( &&, ||, !)
age = 4;
isadult = true;
if (age >= 3 && isadult){
    console.log("You can drive")
} else{
    console.log("You are balak");
}

let salary = 5000;
isEmployed = false;
if (salary >= 4000 || isEmployed){
    console.log("You are eligible for paying loan.");
} else {
    console.log("Bhikari kamana chalu kar.");
}


//Ternary operator

umar = 15;
const verdict = umar >= 18 ? 'adult' : 'balak';
console.log(verdict);

console.log('5' - 2);// string converted to number datatype
console.log('5' + 2) // concatentation takes place as 2 is coerced to string
console.log(null == 0)
console.log(null === 0);

let xx = 0;
console.log(xx || 20);
console.log(xx ?? 20 );
console.log([] == false);
// console.log([] === false);