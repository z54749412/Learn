// 有序数组
/**
 * 二分查找，递归实现。
 * @param target
 * @param arr
 * @param start
 * @param end
 * @returns {*}
 */
function binarySearchCb(target, arr, start, end) {
    var start = start || 0;
    var end = end || arr.length - 1;

    var mid = parseInt(start + (end - start) / 2);
    if (target == arr[mid]) {
        return mid;
    } else if (target > arr[mid]) {
        return binarySearchCb(target, arr, mid + 1, end);
    } else {
        return binarySearchCb(target, arr, start, mid - 1);
    }
    return -1;
}


/**
 * 有序的二分查找，返回-1或存在的数组下标。不使用递归实现。
 * @param target
 * @param arr
 * @returns {*}
 */
function binarySearchWhile(target, arr) {
    var start = 0;
    var end = arr.length - 1;

    while (start <= end) {
        var mid = parseInt(start + (end - start) / 2);
        if (target == arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

// 无序数组

/**
 * 无序的二分查找。返回true/false
 * @param target
 * @param arr
 * @returns {boolean}
 */

function binarySearchSort(target, arr) {
    while (arr.length > 0) {
        //使用快速排序。以mid为中心划分大小，左边小，右边大。
        var left = [];
        var right = [];
        //选择第一个元素作为基准元素(基准元素可以为任意一个元素)
        var pivot = arr[0];
        //由于取了第一个元素，所以从第二个元素开始循环
        for (var i = 1; i < arr.length; i++) {
            var item = arr[i];
            //大于基准的放右边，小于基准的放左边
            item > pivot ? right.push(item) : left.push(item);
        }

        //得到经过排序的新数组
        if (target == pivot) {
            return true;
        } else if (target > pivot) {
            arr = right;
        } else {
            arr = left;
        }
    }
    return false;
}

let arr = [1,2,3,4,5,10,200]
console.log(binarySearchCb(5, arr))
console.log(binarySearchWhile(5, arr))
console.log(binarySearchSort(5, arr))
