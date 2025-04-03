let num = [4, 2, 5, 7, 8, 9, 3, 1, 6];

function partioning(arr, start, end) {
  let s_ptr = start + 1;
  let b_ptr = end;

  while (s_ptr <= b_ptr) {
    if (arr[s_ptr] % 2 === 0) {
      s_ptr++;
    } else if (arr[b_ptr] % 2 !== 0) {
      b_ptr--;
    } else {
      [arr[s_ptr], arr[b_ptr]] = [arr[b_ptr], arr[s_ptr]];
      s_ptr++;
      b_ptr--;
    }
  }
  [arr[start], arr[b_ptr]] = [arr[b_ptr], arr[start]];

  return arr;
}

function arrange_odd_even(arr) {
  let n = arr.length;
  return partioning(arr, 0, n - 1);
}

// console.log(arrange_odd_even(num));

/** ================================================= =================================================*/

function merge_two_into_one(first, second) {
  let start = 0;
  let end = 0;

  let aux = [];
  while (i < first.length && j < first.length) {
    if (first[i] <= second[j]) {
      aux.push(first[i]);
      i++;
    } else if (first[i] > second[j]) {
      aux.push(second[j]);
      j++;
    }
  }
  return aux;
}

let firstArr = [1, 3, 5];
let secondArr = [2, 4, 6, 0, 0, 0];

//console.log(merge_two_into_one(firstArr, secondArr));

// =============================================================

function quick_sort(arr) {
  // Write your code here.
  let n = arr.length;
  helper(arr, 0, n - 1);
  return arr;
}

function helper(arr, start, end) {
  let s_ptr = start + 1;
  let b_ptr = end;

  while (s_ptr <= b_ptr) {
    if (arr[s_ptr] <= arr[start]) s_ptr++;
    else if (arr[b_ptr] > arr[start]) b_ptr--;
    else {
      [arr[b_ptr], arr[s_ptr]] = [arr[s_ptr], arr[b_ptr]];
      s_ptr++;
      b_ptr--;
    }
  }
  [arr[b_ptr], arr[start]] = [arr[start], arr[b_ptr]];

  helper(arr, start, b_ptr - 1);
  helper(arr, b_ptr + 1, end);
}

//console.log(quick_sort([5, 8, 3, 9, 4, 1, 7]));

/* =============================================================== */

/* Merge One Sorted array into another. 
 {
    first: [1,3,5],
    second: [2,4,6,0,0,0]
 }

 o/p: [1,2,3,4,5,6];

 Constraint: No auxilary space allowed.
 */

function merge_two_array(first, second) {
  let n = first.length;
  let m = second.length;

  let i = n - 1;
  let j = n - 1;
  let k = m - 1;

  while (i >= 0 && j >= 0) {
    if (first[i] < second[j]) {
      second[k--] = second[j--];
    } else if (first[i] > second[j]) {
      second[k--] = first[i--];
    }
  }

  while (i >= 0) {
    second[k--] = first[i--];
  }

  while (j >= 0) {
    second[k--] = second[j--];
  }
  return second;
}

console.log(merge_two_array([1, 3, 5], [2, 4, 6, 0, 0, 0]));
