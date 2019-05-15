/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let numsArr = String(x).split('')
  let flag = false
  if (numsArr.length === 1) {
    return true
  }
  let mid = Math.ceil(numsArr.length / 2)
  let head = []
  let tail = []
  if (numsArr.length % 2 === 1) {
    head = numsArr.splice(0, mid - 1)
    tail = numsArr.splice(1)
  } else {
    head = numsArr.splice(0, mid)
    tail = numsArr.splice(0)
  }
  if (head.join('') === tail.reverse().join('')) {
    flag = true
  }
  return flag
};
