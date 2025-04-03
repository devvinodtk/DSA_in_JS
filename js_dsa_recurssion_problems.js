function find_combinations(n, k) {
  if (n <= 1 || k === 0 || k === n) {
    return n;
  } else {
    return find_combinations(n - 1, k) + find_combinations(n - 1, k - 1);
  }
}

// console.log("Number of combinations : ", find_combinations(5, 2));

// ==============================

/**  Tower of Hanoi puzzle */

function tower_of_hanoi(n) {
  const result = [];
  tower_of_hanoi_helper(n, 1, 2, 3, result);
  return result;
}

function tower_of_hanoi_helper(n, src, dst, aux, result) {
  if (n === 1) {
    result.push([src, dst]);
    return;
  } else {
    tower_of_hanoi_helper(n - 1, src, aux, dst, result);
    result.push([src, dst]);
  }
  tower_of_hanoi_helper(n - 1, aux, dst, src, result);
}

// console.log(tower_of_hanoi(3));

// ==============================

/**  Print all binary strings of size n */
const result = [];
function binary_strings(n) {
  bshelper(n, "");
  return result;
}

function bshelper(n, prev) {
  if (n === 0) {
    result.push(prev);
    return;
  } else {
    bshelper(n - 1, prev + "0");
    bshelper(n - 1, prev + "1");
  }
}

console.log(binary_strings(3));


