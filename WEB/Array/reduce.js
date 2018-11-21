/**
 * reduce 方法对累加器和数组的每个值(从左到右) 应用一个函数， 以将其减少为单个值。
 * @param {Array} arr
 * @param {function} fn
 * @param {number} initialValue
 */

function reduce(arr, fn, initialValue = 0) {
    let result = initialValue;
    for (let i = 0; i < arr.length; i++) {
        result = (fn.call(null, result, arr[i], i, arr))
    }
    return result
}

/**
 * 原生reduce方法分析
 */
Array.prototype._reduce = function (callback /*, initialValue*/ ) {
    if (this == null) {
        // undefined == null
        throw new TypeError('null or undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('callback is not a function');
    }
    var oldArr = Object(this);
    var len = oldArr.length >>> 0;
    var initialValue, k = 0;
    if (arguments.length >= 2) {
        initialValue = arguments[1];
    } else {
        while (k < len && !(k in oldArr)) k++;
        if (k >= len) {
            throw new TypeError('Reduce of empty array ' +
                'with no initial value');
        }
        initialValue = oldArr[k++];
    }
    while (k < len) {
        if (k in oldArr) {
            initialValue = callback(initialValue, oldArr[k], k, oldArr);
        }
        k++;
    }
    return initialValue;
}
var array = [1, 2, 3, 4, 5];

let result1 = reduce(array, function (acc, cur, index, arr) {
    console.log(`acc - ${acc}; cur - ${cur}; index - ${index}; arr - ${arr}`);
    return acc + cur;
}, 100)
let result2 = array._reduce(function (acc, cur, index, arr) {
    console.log(`acc - ${acc}; cur - ${cur}; index - ${index}; arr - ${arr}`);
    return acc + cur;
}, 100)
console.log(result1)
console.log(result2)

/**
 * reduceRight 方法和 reduce 类似， 只不过遍历值的顺序和 reduce 方法相反， 从右向左。
 */

 Array.prototype._reduceRight = function (callback /*, initialValue*/ ) {
     if (this == null) {
         // undefined == null
         throw new TypeError('null or undefined');
     }
     if (typeof callback !== 'function') {
         throw new TypeError('callback is not a function');
     }
     var oldArr = Object(this);
     var len = oldArr.length >>> 0;
     var initialValue, k = len - 1;
     if (arguments.length >= 2) {
         initialValue = arguments[1];
     } else {
         while (k >= 0 && !(k in oldArr)) k--;
         if (k < 0) {
             throw new TypeError('Reduce of empty array ' +
                 'with no initial value');
         }
         initialValue = oldArr[k--];
     }
     while (k >= 0) {
         if (k in oldArr) {
             initialValue = callback(initialValue, oldArr[k], k, oldArr);
         }
         k--;
     }
     return initialValue;
 }
 // var array = []
 array._reduceRight(function (acc, cur, index, arr) {
     console.log('-', acc, '-', cur, '-', index);
     return acc - cur;
 }, 100)

 // 实际应用场景可以通过 array.reverse()反转数组再正常调用reduce方法
