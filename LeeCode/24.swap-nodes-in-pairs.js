/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (43.69%)
 * Total Accepted:    293.1K
 * Total Submissions: 670.7K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 *
 *
 *
 * Example:
 *
 *
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let currNode = head;
  let values = [];
  while(currNode){
    values.push(currNode.val);
    currNode = currNode.next;
  }
  if(values.length === 1){
    return new ListNode(values[0]);
  }
  for(var i = 0; i < values.length; i+=2){
    var tmp = values[i + 1];
    if(tmp !== undefined){
      values[i + 1] = values[i]
      values[i] = tmp;
    }
  }

  let index = 0;
  let start = new ListNode();
  currNode = start;
  while(values[index] !== undefined){
      currNode.next = new ListNode(values[index]);
      currNode = currNode.next;
      index++;
  }
  return start.next;
};
