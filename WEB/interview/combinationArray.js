// 从一个无序、不相等的数组中，选取n个数字，使其和为m
function result(arr, n, m) {
    let result = []
    var tmpArr = getCombinationArr(arr, n)
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
