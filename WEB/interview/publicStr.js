var arr_str = ['asdshow', 'helloshow', 'showhi', 'hahashowhehe']; //show

function show(arr) {
    arr = sortStr(arr);
    //console.log(arr);
    var firstStr = arr.shift();
    var strArr = [];
    var count = 0;
    var result = '';
    //console.log(firstStr);
    //console.log(arr);
    for (var i = 0; i < firstStr.length; i++) {
        for (var j = i + 1; j <= firstStr.length; j++) {
            strArr.push(firstStr.substring(i, j));
        }
    }
    //console.log(strArr);
    for (var i = 0; i < strArr.length; i++) {
        var wholeArr = [];
        var re = new RegExp(strArr[i]);
        for (var j = 0; j < arr.length; j++) {
            var reArr = arr[j].match(re);
            if (reArr) {
                wholeArr = wholeArr.concat(reArr);
            }
        }
        //console.log(wholeArr);
        if (wholeArr.length == arr.length) {
            if (wholeArr[0].length > count) {
                count = wholeArr[0].length;
                result = wholeArr[0];
            }
        }
    }
    return result;
}

function sortStr(arr) {
    return arr.sort(function (str1, str2) {
        return str1.length - str2.length;
    });
}
console.log(show(arr_str));
