// 找出重复次数最多的字符串

function findMaxRepeatStr (str) {
    var arr = str.split('');
    var tmp = arr.sort().join('');
    var MaxValue = '';
    var MaxIndex = 0;
    tmp.replace(/(\w)\1+/g, function ($0, $1) {
        console.log($0)
        if (MaxIndex < $0.length) {
            MaxIndex = $0.length;
            MaxValue = $1;
        }
    })
    return {
        MaxValue,
        MaxIndex
    }
}

var str = 'afasfjajhhhhffhadfabbvba';
console.log(findMaxRepeatStr(str))
