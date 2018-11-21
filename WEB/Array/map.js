/**
 * 简单的map方法实现
 * @param {Array} arr
 * @param {function} fn
 */
function map(arr, fn) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(fn.call(null, arr[i], i, arr))
    }
    return result
}

/**
 * 原生map方法分析
 */
Array.prototype._map = function (callback /*, thisArg*/) {
    if (this == null) {
        // undefined == null
        throw new TypeError('null or undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`);
    }
    var oldArr = Object(this);
    // 这里如果this为空那么oldArr为空对象
    var len = oldArr.length >>> 0;
    // 如果oldArr为空对象那么就没有length 属性，然后用右移运算符加一个length属性
    // or: var len = +oldArr.length || 0;
    var thisArg;
    if (arguments.length > 1) {
        thisArg = arguments[1];
    }
    // 这么做的好处在于，即时数组中有空也会被返回为空
    var newArr = new Array(len);
    var k = 0;
    while (k < len) {
        if (k in oldArr) {
            newArr[k] = callback.call(thisArg, oldArr[k], k, oldArr);
        }
        k++;
    }
    return newArr;
}

let arr = [1,2,3,4,5]
let arr1 = map(arr, function(item, index, arr){
    console.log(`item - ${item}; index - ${index}; arr - ${arr}`)
    return item * 2
})
let arr2 = arr._map(function(item, index, arr){
    console.log(`item - ${item}; index - ${index}; arr - ${arr}`)
    return item * 2
})

console.log(arr1, arr2)
