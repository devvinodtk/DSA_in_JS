// Brute force Selection sort

let A = ["S", "A", "M", "P", "L", "E", "E", "X", "A", "M", "P", "L", "E"];

let nums1 = [5, 8, 3, 9, 4, 1, 2];

const swapArray = (indx1, indx2, arr) => {
  let temp = arr[indx2];
  arr[indx2] = arr[indx1];
  arr[indx1] = temp;
};

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swapArray(minIndex, i, arr);
  }
  return arr;
}

// console.log(selectionSort(nums1));

function selectionSortInverse(array) {
  let n = array.length;
  for (let i = n - 1; i >= 0; i--) {
    let maxIndex = i;
    for (let k = i - 1; k >= 0; k--) {
      if (array[k] > array[maxIndex]) {
        maxIndex = k;
      }
    }

    swapArray(maxIndex, i, array);
  }
  return array;
}

// console.log(selectionSortInverse(A));

// console.log(selectionSortInverse(nums1));

/** ================================================= =================================================*/

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        swapArray(j - 1, j, arr);
      }
    }
  }
  return arr;
}

// console.log(bubbleSort(nums1));

// let nums1 = [5, 8, 3, 9, 4, 1, 7];

/** ================================================= =================================================*/

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let temp = arr[i];
    let red = i - 1;
    while (red >= 0 && arr[red] > temp) {
      arr[red + 1] = arr[red];
      red--;
    }
    arr[red + 1] = temp;
  }
  return arr;
}

// console.log(insertionSort(nums1));

/** ================================================= =================================================*/

// Merge Sort implementation start //

const helper = (arr, start, end) => {
  if (start === end) return;

  let mid = Math.floor((end + start) / 2);

  helper(arr, start, mid);
  helper(arr, mid + 1, end);

  let i = start;
  let j = mid + 1;
  let aux = [];
  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      aux.push(arr[i]);
      i++;
    } else if (arr[i] > arr[j]) {
      aux.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    aux.push(arr[i]);
    i++;
  }

  while (j <= end) {
    aux.push(arr[j]);
    j++;
  }

  for (let index = 0; index < aux.length; index++) {
    arr[start + index] = aux[index];
  }

  return;
};

const mergeSort = (arr) => {
  const n = arr.length;
  helper(arr, 0, n - 1);
  return arr;
};

// console.log(mergeSort(nums1));

// Merge Sort implementation end //

/** ================================================= =================================================*/

// Quick Sort implementation start //

const lomutosPartioning = (arr, start, end) => {
  let s_ptr = start;
  for (let b_ptr = start + 1; b_ptr <= end; b_ptr++) {
    if (arr[b_ptr] < arr[start]) {
      s_ptr++;
      swapArray(b_ptr, s_ptr, arr);
    }
  }
  swapArray(s_ptr, start, arr);
  return s_ptr;
};

const quickSortLomutoHelper = (arr, start, end) => {
  // leaf worker
  if (start >= end) return;

  //internal node worker
  let pivot_index = Math.floor(Math.random() * (end - start) + start);
  swapArray(start, pivot_index, arr);

  let s_ptr = lomutosPartioning(arr, start, end);

  quickSortLomutoHelper(arr, start, s_ptr - 1);
  quickSortLomutoHelper(arr, s_ptr + 1, end);
};

const hoaresPartioning = (arr, start, end) => {
  let s_ptr = start + 1;
  let b_ptr = end;

  while (s_ptr <= b_ptr) {
    if (arr[s_ptr] <= arr[start]) s_ptr++;
    else if (arr[b_ptr] > arr[start]) b_ptr--;
    else {
      swapArray(s_ptr, b_ptr, arr);
      s_ptr++;
      b_ptr--;
    }
  }
  swapArray(start, b_ptr);
  return b_ptr;
};

const quickSortHoareHelper = (arr, start, end) => {
  // leaf worker
  if (start >= end) return;

  //internal node worker
  let pivot_index = Math.floor(Math.random() * (end - start) + start);
  swapArray(start, pivot_index, arr);

  let b_ptr = lomutosPartioning(arr, start, end);

  quickSortHoareHelper(arr, start, b_ptr - 1);
  quickSortHoareHelper(arr, b_ptr + 1, end);
};

const quickSort = (arr) => {
  const n = arr.length;
  //quickSortLomutoHelper(arr, 0, n - 1);

  quickSortHoareHelper(arr, 0, n - 1);

  return arr;
};
const num2 = [5, 8, 3, 9, 4, 1, 7];

// console.log(quickSort(num2));

/** ================================================= =================================================*/

function heap_sort(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, n, i);
  }

  for (let i = n - 1; i >= 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    maxHeapify(arr, i, 0);
  }
  return arr;
}

function maxHeapify(arr, n, i) {
  let parent = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[parent]) {
    parent = left;
  }

  if (right < n && arr[right] > arr[parent]) {
    parent = right;
  }

  if (parent !== i) {
    [arr[parent], arr[i]] = [arr[i], arr[parent]];
    maxHeapify(arr, n, parent);
  }
}

const num3 = [12, 11, 13, 5, 6, 7];
// console.log(heap_sort(num3));

/** ================================================= =================================================*/

function counting_sort(arr) {
  let n = arr.length;
  const OFFSET = 400000;
  const MAX_VAL = 400000;
  const RANGE = MAX_VAL * 2 + 1;
  let output = new Array(n);

  const count = new Array(RANGE).fill(0);

  for (let i = 0; i < n; i++) {
    count[arr[i] + OFFSET] += 1;
  }

  for (let i = 1; i < RANGE; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const adjustedValue = arr[i] + OFFSET;
    output[count[adjustedValue] - 1] = arr[i];
    count[adjustedValue]--;
  }

  return output;
}

const num4 = [9, 6, 3, 5, 2, 1, 2];
// console.log(counting_sort(num4));

// =======================================

function two_sum(numbers, target) {
  // Write your code here.
  const sN = numbers
    .map((value, index) => ({
      value,
      index,
    }))
    .sort((a, b) => a.value - b.value);
  let n = sN.length;
  let i = 0;
  let j = n - 1;

  while (i <= j) {
    if (sN[i].value + sN[j].value === target) {
      return [sN[i].index, sN[j].index];
    } else if (sN[i].value + sN[j].value > target) {
      j--;
    } else if (sN[i].value + sN[j].value < target) {
      i++;
    }
  }
  return [-1, -1];
}

// console.log(two_sum([5, 3, 10, 45, 1], 6)); // [1, 3]
// =======================================

function merge_sorted_arrays(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;

  let i = 0;
  let j = 0;
  result = [];
  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j++]);
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }
  while (i < n) {
    result.push(arr1[i++]);
  }

  while (j < m) {
    result.push(arr2[j++]);
  }
  return result;
}

// console.log(merge_sorted_arrays([1, 2, 2, 4, 6, 8], [3, 5, 7, 9])); // [1, 3]

// ===========================================================================

const list = {
  lists: [[1, 3, 5], [3, 4], [7]],
};

function merge_sorted_list(lists) {
  result = lists[0];
  for (let k = 1; k < lists.length; k++) {
    let i = 0;
    let j = 0;
    let n = result.length;
    let m = lists[k].length;
    const temp = [];
    while (i < n && j < m) {
      if (result[i] < lists[k][j]) {
        temp.push(result[i++]);
      } else if (result[i] > lists[k][j]) {
        temp.push(lists[k][j++]);
      } else {
        temp.push(result[i]);
        i++;
      }
    }
    while (i < n) {
      temp.push(result[i++]);
    }

    while (j < m) {
      temp.push(lists[k][j++]);
    }
    result = temp;
  }

  return result;
}

// console.log(merge_sorted_list(list.lists));

// ===========================================================

const list1 = {
  lists: [
    [1, 5],
    [5, 8],
    [10, 15],
  ],
};

function can_attend_all_meetings(intervals) {
  // Sorting in ascending order of start time of an interval.
  // If start time is same for two intervals then sort in ascending order of end time of intervals.
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  for (let i = 0; i < intervals.length - 1; i++) {
    let end_time_current_interval = intervals[i][1];
    let start_time_next_interval = intervals[i + 1][0];
    // If overlap found, return 0.
    if (end_time_current_interval > start_time_next_interval) {
      return 0;
    }
  }
  return 1;
}

// console.log(can_attend_all_meetings(list1.lists));

// ===============================================================
/*
Kth Largest in an array
{
{
"numbers": [-1000000000, -1000000000, -1000000000, -1000000000, -1000000000],
"k": 1
}

"numbers": [5, 1, 10, 3, 2],
"k": 2
}
*/

console.log(kth_largest([100, 0, 100], 2));

function kth_largest(numbers, k) {
  let n = numbers.length;
  kth_prob_helper(numbers, 0, n - 1, n - k);
  return numbers[n - k];
}

function kth_prob_helper(nums, start, end, index) {
  if (start >= end) return;
  let pivot_index = Math.floor(Math.random() * (end - start + 1) + start);
  [nums[pivot_index], nums[start]] = [nums[start], nums[pivot_index]];
  let s_ptr = start;
  for (let b_ptr = start + 1; b_ptr <= end; b_ptr++) {
    if (nums[b_ptr] < nums[start]) {
      s_ptr++;
      [nums[s_ptr], nums[b_ptr]] = [nums[b_ptr], nums[s_ptr]];
    }
  }
  [nums[s_ptr], nums[start]] = [nums[start], nums[s_ptr]];

  if (s_ptr === index) return;
  else if (index < s_ptr) kth_prob_helper(nums, start, s_ptr, index);
  else if (index > s_ptr) kth_prob_helper(nums, s_ptr, end, index);
}

function quickSelect(nums, start, end, index) {
    if (start >= end) return;
    const pivot_index = Math.floor(Math.random() * (end - start) + start);
    [nums[pivot_index], nums[start]] = [nums[start], nums[pivot_index]];
    let s_ptr = start;
    for (let b_ptr = start+1; b_ptr <= end; b_ptr++) {
        if (nums[b_ptr] < nums[start]) {
            s_ptr++;
            [nums[s_ptr], nums[b_ptr]] = [nums[b_ptr], nums[s_ptr]];
        }
    }
    [nums[s_ptr], nums[start]] = [nums[start], nums[s_ptr]];

    if (s_ptr === index) return;
    else if (index < s_ptr) quickSelect(nums, start, s_ptr-1, index);
    else if (index > s_ptr) quickSelect(nums, s_ptr+1, end, index);
    
}