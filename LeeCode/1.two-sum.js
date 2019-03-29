/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (42.75%)
 * Total Accepted:    1.6M
 * Total Submissions: 3.8M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * Example:
 *
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 * 由于默认只有一个正确解，所以考虑用es6 map结构
 * 只要map中没有解就把当前这项放入map中
 * 每次用目标值减去当前值，如果map中有该项，取出下标，和当前下标组成数组返回
 * 如果都没有，返回空数组
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  let map = new Map();
  let i = 0;
  for (let num of nums){
      if (map.has(target-num)) {
          return [map.get(target-num), i];
      }
      map.set(num, i++);
  }
  return [];
};
// twoSum([1, 2, 3, 4], 6)