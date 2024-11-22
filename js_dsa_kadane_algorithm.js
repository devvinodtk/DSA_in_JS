/**
 * Q. Given an integer array nums, find the subarray with the largest sum
 * and return it's sum.
 *
 */

//Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]            --->>>>>> Output: 6, [4, -1, 2, 1]
//Input: [5, 4, -1, 7, 8]                           --->>>>>> Output: 23, [5, 4, -1, 7, 8]

const findLargetSumSubArray = (nums) => {
  let maxSum = 0;
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        startIndex = i;
        endIndex = j;
      }
    }
  }
  return {
    sum: maxSum,
    subArray: nums.slice(startIndex, endIndex + 1),
  };
};

// console.log(findLargetSumSubArray([5, 4, -1, 7, 8]));
// -2,

const maxSubArrayKadens = (nums) => {
  let sum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};

console.log(maxSubArrayKadens([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
