/* Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
*/

const max_sub_array_of_size_k = function(k, arr) {
  let max = 0;
  let currWin = 0;
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr.slice(i, i + k);
    if (subArr.length !== k){
      break;
    } else {
      currWin = subArr.reduce(((prev, curr) => prev + curr), 0);
    }
    if (currWin > max) {
      max = currWin;
    }
  }
  return max;
};
