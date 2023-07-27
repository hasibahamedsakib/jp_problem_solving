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

/**
    Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

*/

function mostFrequentElement(array) {
  let maxCount = 0;
  let mostFrequent;
  for (let x = 0; x <= array.length; x++) {
    let count = 0;
    for (let y = 0; y <= array.length; y++) {
      if (array[x] == array[y]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      mostFrequent = array[x];
    }
  }
  return mostFrequent;
}

let frequentResult = mostFrequentElement([3, 5, 5, 2, 5, 3, 5, 3, 1, 4, 3]);
console.log(frequentResult);

/**
  * Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

 Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

*/
function findPair(array, target) {
  let numObj = {};
  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];
    if (numObj.hasOwnProperty(complement)) {
      return [numObj[complement], i];
    }
    numObj[array[i]] = i;
  }

  return [];
}

console.log(findPair([1, 3, 6, 8, 11, 15], 9));
// output: [1, 2]

/**
 * Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

*/

function simpleCalculator(num1, num2, operator) {
  if (operator == "+") return num1 + num2;
  if (operator == "-") return num1 - num2;
  if (operator == "*") return num1 * num2;
  if (operator == "/") return num1 / num2;
}

console.log(simpleCalculator(18, 2, "+"));

/** 
   * Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
   
*/

function generatePassword(length) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let special = "!@#$%^&*()";

  let types = [upper, lower, number, special];

  let password = "";

  for (let i = 0; i < length; i++) {
    let typeIndex = Math.floor(Math.random() * types.length);
    let type = types[typeIndex];

    let charIndex = Math.floor(Math.random() * type.length);

    password += type[charIndex];

    types.splice(typeIndex, 1);

    if (types.length === 0) {
      types = [upper, lower, number, special];
    }
  }

  return password;
}

console.log(generatePassword(8));
/** Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.*/
function romanToInteger(roman) {
  let values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let integer = 0;
  for (let i = 0; i < roman.length; i++) {
    let current = values[roman[i]];

    let next = values[roman[i + 1]] || 0;

    if (current < next) {
      integer -= current;
    } else {
      integer += current;
    }
  }

  return integer;
}

console.log(romanToInteger("IX"));

/**
 * Task-8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

*/

function secondSmallestNumber(array) {
  let smallest = array[0];
  let secondSmallest = array[1];
  for (const iterator of array) {
    if (smallest > iterator) smallest = iterator;
    if (iterator > smallest && iterator < secondSmallest) {
      secondSmallest = iterator;
    }
  }
  return secondSmallest;
}

let number = secondSmallestNumber([11, 5, 3, 4, 8, 9, 10]);
console.log(number);
