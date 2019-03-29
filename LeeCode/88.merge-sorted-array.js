/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (35.14%)
 * Total Accepted:    341.8K
 * Total Submissions: 972.4K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 *
 * Note:
 *
 *
 * The number of elements initialized in nums1 and nums2 are m and n
 * respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to
 * m + n) to hold additional elements from nums2.
 *
 *
 * Example:
 *
 *
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * Output: [1,2,2,3,5,6]
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

  var r = [];
  var i1 = 0;
  var i2 = 0;

  if (i1 < m && i2 < n) {
      if (i1 < i2) {
          r.push(nums1[i1]);
          i1++;
      } else {
          r.push(nums2[i2]);
          i2++;
      }
  }

  if (i1 < m) {
      while (i1 < m) {
          r.push(nums1[i1]);
          i1++;
      }
  }

  if (i2 < n) {
      while (i2 < n) {
          r.push(nums2[i2]);
          i2++
      }
  }

  for (let i = 0; i < m + n; i++) {
      nums1[i] = r[i];
  }

  nums1.sort((x, y) => x - y);

};
