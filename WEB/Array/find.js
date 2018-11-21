/**
 * find 方法返回数组中满足提供的测试函数的第一个元素的值。 否则返回 undefined。
 * @param {Array} arr
 * @param {function} fn
 */

function find(arr, fn){
    for (let i = 0; i < arr.length; i++) {
        if (fn.call(null, arr[i], i, arr)) {
            return  arr[i]
        }
    }
    return undefined
}

// find方法原生分析
Array.prototype._find = function (callback /*, thisArg*/ ) {
    if (this == null) {
        // undefined == null
        throw new TypeError('null or undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('callback is not a function');
    }
    var oldArr = Object(this);
    var len = oldArr.length >>> 0;
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    var k = 0;
    while (k < len) {
        if (k in oldArr) {
            var val = oldArr[k];
            if (callback.call(thisArg, val, k, oldArr)) {
                return val;
            }
        }
        k++;
    }
    return undefined;
}

let array = [1,2,3,4,5]
let result1 = find(array, function (item, index, arr) {
    return item > 2
})
let result2 = find(array, function(item, index, arr){
    return item > 6
})

let result3 = array._find(function (item, index, arr) {
    return item > 2
})
let result4 = array._find(function (item, index, arr) {
    return item > 6
})
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
