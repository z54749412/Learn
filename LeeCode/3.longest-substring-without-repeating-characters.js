/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.10%)
 * Total Accepted:    851.2K
 * Total Submissions: 3M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 *
 * Example 3:
 *
 *
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 *
 *
 *
 *
 */
/**
 *
 * 主要利用indexOf API
 * stringObject.indexOf(searchvalue,fromindex)
 * abcabcdbb
 * 当匹配到索引为3的a时发现重复
 * 下一次 stringObject.indexOf(searchvalue, 1)
 * 把第一个除去继续执行匹配
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) {
      return s.length;
  }
  let max = 1;
  let ptr = 0;

  for (let i = 1; i < s.length; i++) {
      let index = s.indexOf(s.charAt(i), ptr);
      if (index < i) {
          ptr = index + 1;
      }
      max = Math.max(max, i - ptr + 1);
  }
  return max;
};

let s = 'abcabcdbb'
lengthOfLongestSubstring(s)