// 从一个无序、不相等的数组中，选取n个数字，使其和为m
function result(arr, n, m) {
    let result = []
    var tmpArr = getCombinationArr(arr, n)
    console.log(tmpArr.length)
    for (var i = 0; i < tmpArr.length; i++) {
        if (m === getSum(tmpArr[i])) {
            result.push(tmpArr[i])
        }
    }
    function getCombinationArr(arr, n) {
        var r = [];
        (function c(t, a, n) {
            if (n === 0) {
                return r.push(t)
            }
            // for(var i = 0, l = a.length; i <= l - n; i++){
            for (var i = 0; i < a.length; i++) {
                c(t.concat(a[i]), a.slice(i + 1), n - 1)
            }
        })([], arr, n)
        return r;
    }

    function getSum(arr) {
        return arr.reduce(function (total, num) {
            return total + num
        })
    }
    return result
}

var arr = [1, 3, 4, 5, 7, 8, 11, 20]
// console.log(getCombinationArr(arr, 2))
console.log(result(arr, 2, 7))


/**
 * 数学办法
 * A(m.n) = m!/(m-n)!
 * C(m.n) = m!/(n!*(m-n)!)
 * A(3,2) = 3!/(3-2)!
 * @param {Array} m
 * @param {number} n
 */

function A(m, n) {
    return f(m) / f(m - n);
}

function C(m, n) {
    return f(m) / (f(n) * f(m - n))
}

function f(num) {
    if (num <= 1) {
        return 1;
    }
    return num * f(num - 1);
}

console.log('------------')
console.log(C(arr.length, 2))
