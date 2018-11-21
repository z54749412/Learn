/**
 * filter 方法使用指定的函数测试所有元素， 并创建一个包含所有通过测试的元素的新数组。
 * @param {Array} arr
 * @param {function} fn
 */

function filter(arr, fn){
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn.call(null, arr[i], i, arr)){
            result.push(arr[i])
        }
    }
    return result
}

Array.prototype._filter = function (callback /*, thisArg*/ ) {
    if (this == null) {
        // undefined == null
        throw new TypeError('null or undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('callback is not a function');
    }
    var oldArr = Object(this);
    var len = oldArr.length >>> 0;
    var newArr = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    var k = 0;
    while (k < len) {
        if (k in oldArr) {
            var val = oldArr[k];
            if (callback.call(thisArg, val, k, oldArr)) {
                newArr.push(val);
            }
        }
        k++;
    }
    return newArr;
}

var arr = [1,2,3,4,5]
var arr1 = filter(arr, function(item, index, arr){
    console.log(`item - ${item}; index - ${index}; arr - ${arr}`)
    return item > 3
})

var arr2 = arr._filter(function (item, index, arr) {
    console.log(`item - ${item}; index - ${index}; arr - ${arr}`)
    return item > 3
})
console.log(arr1)
console.log(arr2)
