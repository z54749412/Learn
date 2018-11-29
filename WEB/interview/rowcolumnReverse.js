/**
 * 行列互换
 * @param {Array} arr
 * @param {number} size
 */

function changeXY(arr, size) {
    var newArr = [];
    var iNow = 0;
    (function () {
        if (iNow == size) {
            return;
        }
        for (var i = 0; i < arr.length; i++) {
            if (i % size == iNow) {
                newArr.push(arr[i]);
            }
        }
        iNow++;
        arguments.callee();
    })();
    return newArr;
}

/**
 * [1,2,3,4,5,6,7,8,9]
 * 每行3个元素组成一个如下矩阵
 * 1 2 3
 * 4 5 6
 * 7 8 9
 *
 * 通过方法转换后为
 *
 * 1 4 7
 * 2 5 8
 * 3 6 9
 *
 * [1,4,7,2,5,8,3,6,9]
 */

let arr = [1,2,3,4,5,6,7,8,9]
let result = changeXY(arr, 3)
console.log(result)
