//increment decrement operator
// let i = 2;
// console.log(i++);
// console.log(i);

// let j = 5;
// console.log(++j);
// console.log(j);

function postInc(num) {
    return num++
}
console.log(postInc(6));
console.log(postInc(6));

function postDec(num){
    return ++num
}
console.log(postDec(9));