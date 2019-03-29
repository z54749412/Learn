/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.80%)
 * Total Accepted:    806.3K
 * Total Submissions: 2.6M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let linked = new ListNode(-1);
  let node = new ListNode(-1);
  linked.next = node;
  let current = 0;
  let curSum = 0;
  while (l1 || l2 || current) {
      curSum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + current;
      current = curSum > 9 ? 1 : 0;
      curSum %= 10;
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
      node.next = new ListNode(curSum);
      node = node.next;
  }
  return linked.next.next;
};
