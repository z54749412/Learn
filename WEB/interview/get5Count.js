// 统计 0-n 之间 5 出现的次数
function count5(n) {
    // debugger;
    // 如果输入的不是数字 或者空 或者小于0情况直接返回
    if (n === null || isNaN(n) || n < 0) {
        return 0;
    }
    // 小于10 是否小于5 小于5 则0次5
    if (n < 10) {
        return n < 5 ? 0 : 1;
    }

    var topDigitE = 1,
        topDigit = n;
    do {
        topDigitE *= 10;
    } while ((topDigit /= 10) >= 10);
    topDigit = Math.floor(topDigit);
    var restDigit = n % topDigitE;
    var total = 0;
    if (topDigit == 5) {
        total += restDigit + 1;
    }
    total += count5(topDigit * topDigitE - 1);
    total += count5(restDigit);
    return total;
}
console.log(count5(10000));

function testCount5(n, printHint5) {
    if (!printHint5) {
        console.time('calcTime');
        console.log(n, count5(n));
        console.timeEnd('calcTime');
    } else {
        var last, current, i = 0;
        do {
            current = count5(i);
            if (last !== current) {
                console.log(i, current);
                last = current;
            }
            i++;
        } while (i <= n);
    }
}
