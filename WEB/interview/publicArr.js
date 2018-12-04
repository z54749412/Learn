var arr_arr = [
    [3, 8, 5],
    [1, 9, 4, 3, 6, 7, 5, 2],
    [3, 4, 5],
    [5, 6, 7, 3]
]; //公共子项 3 , 5

function show(arr) {
    var wholeArr = [];
    var json = {};
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        wholeArr = wholeArr.concat(unqiue(arr[i]));
    }
    //console.log(wholeArr);
    for (var i = 0; i < wholeArr.length; i++) {
        if (!json[wholeArr[i]]) {
            json[wholeArr[i]] = [wholeArr[i]];
        } else {
            json[wholeArr[i]].push(wholeArr[i]);
        }
    }
    //console.log(json);
    for (var attr in json) {
        if (json[attr].length == arr.length) {
            result.push(attr);
        }
    }
    return result;

}

function unqiue(arr) {
    var json = {};
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!json[arr[i]]) {
            json[arr[i]] = 1;
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(show(arr_arr));
