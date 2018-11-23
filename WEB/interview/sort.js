/**
 * 冒泡排序
 * @param {Array} arr
 */
var bubbleSort = function (arr) {
    let tmpArr = [...arr]
    for (var i = 0; i < tmpArr.length - 1; i++) {
        //开闭原则中的开关
        bool = true;
        for (var j = 0; j < tmpArr.length - 1 - i; j++) {
            if (tmpArr[j] > tmpArr[j + 1]) {
                //交换两个变量
                temp = tmpArr[j];
                tmpArr[j] = tmpArr[j + 1];
                tmpArr[j + 1] = temp;
                bool = false; //将开关关闭
            }
        }
        //如果内循环中的if没有被执行（开关关闭，执行下面的语句）;
        if (bool) {
            break;
        }
    }
    return tmpArr
}

var quickSort = function (arr) {
    let tmpArr = [...arr]
    if (tmpArr.length <= 1) {
        return tmpArr;
    }
    var pivotIndex = Math.floor(tmpArr.length / 2);
    var pivot = tmpArr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < tmpArr.length; i++) {
        if (tmpArr[i] < pivot) {
            left.push(tmpArr[i]);
        } else {
            right.push(tmpArr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};

var mergeSort = function (arr) {
    let tmpArr = [...arr]
    function merge(left, right) {
        var result = [];
        while (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
        return result.concat(left).concat(right);
    }
    if (tmpArr.length == 1) {
        return tmpArr;
    }
    var middle = Math.floor(tmpArr.length / 2);
    var left = tmpArr.slice(0, middle);
    var right = tmpArr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

var heapSort = function (arr) {
    let temArr = [...arr]
    // let thisItem = arr.slice(0);

    function swap(i, j) {
        var tmp = temArr[i];
        temArr[i] = temArr[j];
        temArr[j] = tmp;
    }

    function max_heapify(start, end) {
        var dad = start;
        var son = dad * 2 + 1;
        if (son >= end)
            return;
        if (son + 1 < end && temArr[son] < temArr[son + 1])
            son++;
        if (temArr[dad] <= temArr[son]) {
            swap(dad, son);
            max_heapify(son, end);
        }
    }

    var len = temArr.length;
    for (var i = Math.floor(len / 2) - 1; i >= 0; i--)
        max_heapify(i, len);
    for (var i = len - 1; i > 0; i--) {
        swap(0, i);
        max_heapify(0, i);
    }
    return temArr;
};

let arr = [62, 3, 11, 23, 7, 4, 9, 1, 2]

console.log(bubbleSort(arr))
console.log(quickSort(arr))
console.log(mergeSort(arr))
console.log(heapSort(arr))
