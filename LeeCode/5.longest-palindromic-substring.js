/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var arr = s.split('');
  var start = 0, end = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= i && i + j < arr.length; j++) {
      if (arr[i - j] == arr[i + j]) {
        if (2 * j > end - start) {
          start = i - j;
          end = i + j;
        }
        else continue;
      }
      else break;
    }
    if (i < arr.length - 1 && arr[i] == arr[i + 1]) {
      if (end - start < 2) {
        start = i;
        end = i + 1;
      }
      for (let j = 1; j <= i && i + j + 1 < arr.length; j++) {
        if (arr[i - j] == arr[i + j + 1]) {
          if (2 * j + 2 > end - start + 1) {
            start = i - j;
            end = i + j + 1;
          }
          else continue;
        }
        else break;
      }
    }
  }
  return s.substring(start, end + 1);
};
