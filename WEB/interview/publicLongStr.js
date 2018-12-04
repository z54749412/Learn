var arr_str = ['asdshowccccc', 'ddshoweeasdsho']; // dshow

function show(arr) {
    var str0 = arr[0];
    var str1 = arr[1];
    var count = 0;
    var index = 0;
    for (var i = 0; i < str0.length; i++) {
        for (var j = 0; j < str1.length; j++) {
            if (str0.charAt(i) == str1.charAt(j)) {
                var k = 1;
                while (str0.charAt(i + k) == str1.charAt(j + k)) {
                    k++;
                    if (k > count) {
                        count = k;
                        index = i;
                    }
                }
            }
        }
    }
    return str0.substr(index, count);
}
console.log(show(arr_str));
