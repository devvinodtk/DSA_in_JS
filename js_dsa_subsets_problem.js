function count_subsets(n) {
  if (n === 0) return 1;
  else return 2 * count_subsets(n - 1);
}

// console.log(`Number of subsets: ${count_subsets(3)}`);

function count_all_subsets(n) {
  if (n === 0) {
    return 1;
  } else {
    let result = count_all_subsets(Math.floor(n / 2));
    let count = result * result;
    if (n % 2 !== 0) count *= 2;
    return count;
  }
}

// console.log(`Number of subsets: ${count_all_subsets(6)}`);

function fibonnaci(n) {
  return helper(n, 0, 1);
}

function helper(n, b1, b2) {
  if (n === 0) return b1;
  else return helper(n - 1, b2, b1 + b2);
}

// console.log(fibonnaci(5));

function twoSum(numbers, target) {
  let n = numbers.length;
  let p1 = 0;
  let p2 = n - 1;

  while (p1 <= p2) {
    if (numbers[p1] + numbers[p2] === target) {
      return [p1, p2];
    } else if (numbers[p1] + numbers[p2] > target) p2--;
    else if (numbers[p1] + numbers[p2] < target) p1++;
  }
  return [-1, -1];
}

console.log(twoSum([1, 2, 3, 5, 10], 7));
