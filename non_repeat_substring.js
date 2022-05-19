/*
Given a string, find the length of the longest substring, which has all distinct characters.

Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring with distinct characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring with distinct characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings with distinct characters are "abc" & "cde".
*/

const non_repeat_substring = function(str) {
  let longest = 0;
      letters = {};
      j = 0;
  // loop through the string
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    // if the letter already exists in the map
    // move the window until that letter only occurs once
    // either the windowStart or one after the current earliest recorded index of that letter
    if (letter in letters) {
      j = Math.max(j, letters[letter] + 1);
    }
    // record the letter and the index it showed up in
    letters[letter] = i;
    // record the current longest substring
    longest = Math.max(longest, i - j + 1);
  }
  // return the result
  return longest;
};
