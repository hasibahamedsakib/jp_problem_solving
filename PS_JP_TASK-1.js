/**
 * Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

* Example Input: "hello world" Example Output: "dlrow olleh"

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
let result = reverseString(str);
console.log(result);
