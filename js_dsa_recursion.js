// Basic example with a base case.

const recursiveFunc = (person) => {
  while (person < 5) {
    console.log(`Person ${person} responed Yes`);
    recursiveFunc(person + 1);
  }
};

// recursiveFunc(1);

// Loops vs Recursion
let arr = [1, 2, 3, 4];

function multiply(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

// console.log(multiply(arr));

function recursiveMultiply(arr) {
  const size = arr.length;
  if (size <= 0) {
    return 1;
  } else {
    return arr[size - 1] * recursiveMultiply(arr.slice(0, size - 1));
  }
}

// console.log(recursiveMultiply(arr));

// Most asked DSA Recursion Questions for DSA Interviews

//Q.  Factorial of a number n

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

// console.log(factorial(4));

// Q. Create an array with range of numbers
// Input: start=1, end=5 ----->>>> Output: [1,2,3,4,5]

const arrayWithInRange = (start, end) => {
  if (end < start) return [];
  const numbers = arrayWithInRange(start, end - 1);
  numbers.push(end);
  return numbers;
};

// console.log(arrayWithInRange(0, 5));

// Q. Given an integer x, return true if x is a palindrome and false otherwise
// Input: x = 121 ----->>>> Output: true
// Input: x = 10 ----->>>> Output: false

const checkPalindrome = (num) => {
  let numStr = num.toString();
  // Base case: A string of length 0 or 1 is a palindrome
  if (numStr.length <= 1) {
    return true;
  }

  // Check if the first and last characters are the same
  if (numStr[0] !== numStr[numStr.length - 1]) {
    return false;
  }

  // Recursive call: Check the substring excluding the first and last characters
  return checkPalindrome(numStr.slice(1, -1));
};

// console.log(checkPalindrome(10));

// Q. Fibonacci Number
// F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2), for n > 2
//
// Input: n = 3 ----->>>> Output: 2

const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

const printFib = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(fib(i));
  }
};

// console.log(fib(5));
// printFib(5);

//Q. Reverse a string
//
//
// Input: hello ----->>>> Output: olleh

const reverseString = (str) => {
  if (str === "") return "";
  return reverseString(str.substr(1)) + str.charAt(0);
};

// console.log(reverseString("hello"));

// Q. Subsets - (Backtracking algorithm using recursion)
// Given an integer array nums of unique elements, return all possible subsets (the power set)
// The solution set must not contain dubplicate subsets. Return the solution in any order

function subsets(nums) {
  let result = [];
  let temp = [];

  function recursiveSubsets(nums, i) {
    if (i == nums.length) {
      return result.push([...temp]);
    }
    temp.push(nums[i]);
    recursiveSubsets(nums, i + 1);
    temp.pop();
    recursiveSubsets(nums, i + 1);
  }
  recursiveSubsets(nums, 0);
  return result;
}

console.log(subsets([1, 2, 3]));
