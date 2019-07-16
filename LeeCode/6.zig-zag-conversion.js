/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows <= 1) return s;
  let res = "";
  let len = s.length;
  let dis = numRows * 2 - 2;

  /* first row */
  for (let i = 0; i < len; i += dis) {
    res += s.charAt(i);
  }

  /* middle */
  for (let i = 1; i < numRows - 1; i++) {
    let tempDis = 2 * i;
    for (let j = i; j < len; j += tempDis) {
      res += s.charAt(j);
      tempDis = dis - tempDis;
    }
  }

  /* last row */
  for (let i = numRows - 1; i < len; i += dis) {
    res += s.charAt(i);
  }
  return res;
};
