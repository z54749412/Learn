/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.22%)
 * Total Accepted:    641.1K
 * Total Submissions: 2.5M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 *
 * Input: 123
 * Output: 321
 *
 *
 * Example 2:
 *
 *
 * Input: -123
 * Output: -321
 *
 *
 * Example 3:
 *
 *
 * Input: 120
 * Output: 21
 *
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var x = x + "";
    var arr = x.split("");
    var sym = '';
    if(arr[0] === '-'){
        sym = arr.splice(0,1);
    }
    arr.reverse();
    var f = function (arr) {
        if (arr[0] !== 0) {
           return arr;
       } else {
           arr.splice(0,1)
            return f(arr);
       }
    };
    var newArr = f(arr);
    var str = '';
    for (var i = 0; i < newArr.length; i++) {
        str += newArr[i];
    }
    str = (sym + str) - 0;
    if (str > Math.pow(2, 31) || str < -Math.pow(2, 31)) {
        str = 0
    }
    return str;
};
