/* Given an array of sorted numbers, separate all duplicates from it in-place. You should not use any extra space; move all duplicates at the end of the array and after moving return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
*/

const remove_duplicates = function(arr) {
  // set pointers
  let i = 0;
      j = 0;
  // loop through array
  while (i < arr.length) {
    // if array at i is not a duplicate, increment nonduplicate
    // pointer and swap values
    if (arr[i] !== arr[j]) {
      j += 1;
      arr[j] = arr[i];
    }
    // increment through the array
    i += 1;
  }
  // return the index of the last non-repeated + 1 for the count
  return j + 1;
};