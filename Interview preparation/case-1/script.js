//String Reversal 
//Traditional 
// function reverseStringTraditional(str) {
//   let reversed = '';
//   // Loop backward through the string
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// reverseStringTraditional('Developer')

//Modern way to reverse a string
// function reverseString(str){
//     return str.split('').reverse().join('')
// }
// console.log(reverseString("developer"))

//Palindrome Check 
// function isPalindrome(str){
//     const len = str.length;
//     for (let i = 0; i < len/2; i++){
//         if ( str[i] !== str[len - 1 - i]){
//             return false;
//         }
//     }
//     return true;
// }

// //modern ES6 way
// function palindromeCheck(str){
//     const reversedStr = str.split('').reverse().join('')
//     return str === reversedStr;
// }

// console.log(palindromeCheck('dad'));


//Finding the largest element in the array
function findLargestNum(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

console.log(findLargestNum([12,23,42,12,4,23,43]))
// modern way
