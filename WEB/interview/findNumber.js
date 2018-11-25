/**
 * 找到字符串中的连续数字并将其返回出来
 * 如 'afl123kj45hg12abj56kchf3iu1234'
 * 返回为[123,45,12,56,3,1234]
 */

function findNumber(str) {
    let result = [];
    let tmp = ''
    for(let i = 0; i < str.length; i++){
        if (!isNaN(str.charAt(i))) {
            tmp += str.charAt(i)
        } else {
            if (tmp) {
                result.push(tmp-0)
                tmp = '';
            }
        }
    }
    if (tmp) {
        result.push(tmp-0)
        tmp = '';
    }
    return result
}

// 正则方法
function regFindNum(str) {
    return str.match(/\d+/g)
}

let str = 'afl123kj45hg12abj56kchf3iu1234'
console.log(findNumber(str))
console.log(regFindNum(str))
