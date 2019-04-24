/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((a, b) => a - b)
  let mid = Math.floor(arr.length/2)
  if (arr.length === 0) {
      return 0
  }
  if (arr.length % 2 === 1) {
      return arr[mid]
  }

  return ((arr[mid - 1] || 0) + (arr[mid] || 0)) / 2

};
