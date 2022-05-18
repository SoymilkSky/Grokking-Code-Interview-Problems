/*
Problem Statement#
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
Example 4:

Input: String="cbbebi", K=10
Output: 6
Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".
*/

const longest_substring_with_k_distinct = function(str, k) {
  let longest = 0;
  // hashmap to store characters, if map size exceeds k, remove letter at windowStart
  let letters = {};
  let windowStart = 0;
  // iterate through
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // if letter is not in the letters map, add it in
    if (!(char in letters)) {
      letters[char] = 0;
    }
    // increment the corresponding letter
    letters[char] += 1;
    // while the letters object size is greater than k
    // remove that letter and shrink the window
    while (Object.keys(letters).length > k) {
      let leftChar = str[windowStart];
      letters[leftChar] -= 1;
      if (letters[leftChar] === 0) {
        delete letters[leftChar];
      }
      windowStart += 1;
    }
    // record the length on every loop
    longest = Math.max(longest, i - windowStart + 1);
  }
  return longest;
};