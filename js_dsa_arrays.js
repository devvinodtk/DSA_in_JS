/**
 * 
 * 
 * 
// Declare an Array
let arr = []; // or new Array();

// Declare and initialize an array
let newArr = ["Appple", "Banana", "Watermelon"];

// Access elements of an array
console.log(newArr[0]);
console.log(newArr[2]);

// JS Array can hold heterogeneous types of values.
let hterArr = [
  "Appple",
  "Banana",
  "Watermelon",
  1,
  2,
  4,
  { name: "Vinod", role: "developer" },
];

// Find the number of elements or length of an array
console.log(`Number of elements in the array are ${hterArr.length}`);

//Add or remove elements from an array end
newArr.push("Orange");
newArr.push("Pappaya");
console.log(newArr);

newArr.pop();
console.log(newArr);

//Add elements to beginning of an array
newArr.unshift("Grapes");

console.log(newArr);

//Remove an element from the beginning of an array
newArr.shift();
console.log(newArr);

//Looping through an array.
// 1. for loop
// 2. while loop
// forEach, map, filter, reduce

const intArr = [2, 4, 6, 8, 10, 12];

// Array.prototype.some Return 'true' if some of the elements meets the condition
const someRes = intArr.some((item, index, arr) => {
  return item > 3;
});

console.log(someRes);

// Array.prototype.every Return 'true' if all of the elements meets the condition
const everyRes = intArr.every((item, index, arr) => {
  return item % 2 === 0;
});

console.log(everyRes);

// Array.prototype.find Returns the first element of the array that meets the condition
const findRes = intArr.find((item, index, arr) => {
  return item > 10;
});

console.log(findRes);

//Spread and Rest Operators
// Spread Operator expands the array element into individual elements.
const finalArr = [...intArr, 14, 16, 18, 20];

console.log(finalArr);

// Rest operator converts multiple args passed to a function to single element.
const sum = (...args) => args.reduce((acc, cur) => (acc += cur));

console.log(sum(2, 4, 6, 8, 10, 12, 14));

//Array.prototype.concat, combines two or more arrays and returns a new array.
const combinedArr = newArr.concat(hterArr);

// Array.prototype.slice, returns new array between start-index (included) and end-index (excluded).
// a negative index can be used to indicate an offset from the end of the array.
// For example, -2 refers to the second to last element of the array.

console.log(combinedArr);

const slicedArr = combinedArr.slice(2, 5);

console.log(slicedArr);

const negSlicedArr = combinedArr.slice(-5);

console.log(negSlicedArr);

// Array.prototype.splice, Removes elements from an array and, if necessary, inserts new elements in their place,
// returning the deleted elements.

const splicedArr = combinedArr.splice(-1, 6, ...intArr);

console.log(splicedArr);
console.log(combinedArr);

//Array.prototype.fill replaces the elements from start to end (excluded) index in array with the element specified.

const dummy = [1, 3, 5, 7, 9];
dummy.fill(0, 3, 4);
console.log(dummy);

const indexof2 = dummy.findIndex((item) => item === 3);
console.log(indexof2);

//Array.prototype.flat: flatten an array by optionally mentioning the depth to be flattened.
// default depth is 1

const flattenEx = [1, 2, [3, 4, 5], [6, [7, 8, [9]]]];

console.log(flattenEx.flat(3));

//Array.prototype.reverse()

//Array.prototype.sort()
const unsorted = [5, 2, 8, 9, 4, 7, 1, 3, 6];
console.log(unsorted.sort((a, b) => a - b));


 *
 *
 *
 *
 */

//Questions

//Q1. Find the second largest element in an array
const input1_q1 = [12, 35, 1, 10, 34, 1];

const secLarge = (arr) => {
  console.time("secLarge");
  const sortedArr = arr.sort((a, b) => a - b);
  const sortedArray = Array.from(new Set(arr));
  console.timeEnd("secLarge");
  return sortedArray[sortedArray.length - 2];
};

// console.log(`Second largest element is ${secLarge(input1_q1)}`);

const secLargeOptimized = (arr) => {
  console.time("secLargeOptimized");
  let largest = Number.NEGATIVE_INFINITY;
  let secLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secLargest) {
      secLargest = arr[i];
    }
  }
  console.timeEnd("secLargeOptimized");
  return secLargest;
};

// console.log(
//   `Second largest element [optimized] is ${secLargeOptimized(input1_q1)}`
// );

// ============================================

// Q2. Rotate an array of size n by k numbers
// timecomplexity O(n)

const roatateArray = (arr, k) => {
  const size = arr.length;

  if (k > size) {
    k = k % size;
  }
  const rotated = arr.splice(size - k, size);
  arr.unshift(...rotated);
  return arr;
};

// console.log(roatateArray([1, 2, 3, 4, 5, 6, 7], 3));

const roatateArrayOptimized = (arr, k) => {
  const size = arr.length;
  if (k > size) {
    k = k % size;
  }

  // [1, 2, 3, 4, 5, 6, 7] ==> [7, 6, 5, 4, 3, 2, 1]
  reverseArray(arr, 0, size - 1);

  // [7, 6, 5, 4, 3, 2, 1]  ==> [5, 6, 7, 4, 3, 2, 1]
  reverseArray(arr, 0, k - 1);

  //[5, 6, 7, 4, 3, 2, 1] ==> [5, 6, 7, 1, 2, 3, 4]
  reverseArray(arr, k, size - 1);

  return arr;
};

const reverseArray = (nums, left, right) => {
  while (right > left) {
    let temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
};

// console.log(roatateArrayOptimized([1, 2, 3, 4, 5, 6, 7], 3));

// ============================================

//Q3. Remove the duplicate elements in-place from a sorted array.
// The relative order of the element should be kept the same. Return the number of unique elements.
// Input: [1,1,2]                       ===> Output: 2 [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4]         ===> Output: 2 [0,1,2,3,4,_,_,_,_,_]

const removeDuplicates = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) {
      arr.splice(i + 1, 1);
      i--;
    }
  }
  console.log(arr);
  return arr.length;
};

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Without splice method.

const removeDuplicatesNew = (arr) => {
  let x = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[x] !== arr[i]) {
      arr[++x] = arr[i];
    }
  }
  console.log(arr);
  return x + 1;
};

console.log(removeDuplicatesNew([1, 1, 2]));
