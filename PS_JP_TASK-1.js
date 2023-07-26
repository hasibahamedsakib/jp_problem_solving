/**
 * Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
 */

function reverseString(str) {
  let blankAry = [];
  let reverseAry = [];
  for (const iterator of str) {
    blankAry.push(iterator);
  }
  for (let x = blankAry.length - 1; x >= 0; x--) {
    reverseAry.push(blankAry[x]);
  }
  return reverseAry.join("");
}
let str = "Hello World";
let reverseResult = reverseString(str);
console.log(reverseResult);

/**
 * Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
 */

let sum = 0;
function positiveSum(ary) {
  let total = 0;
  for (let x = 0; x <= ary.length; x++) {
    if (ary[x] > 0) {
      total = total + ary[x];
    }
  }
  return total;
}
let sumResult = positiveSum([2, -5, 10, -3, 7]);
console.log(sumResult);
