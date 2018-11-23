        console.log('1');

        setTimeout(function () {
            console.log('2');
            process.nextTick(function () {
                console.log('3');
            })
            new Promise(function (resolve) {
                console.log('4');
                resolve();
            }).then(function () {
                console.log('5')
            })
        })
        process.nextTick(function () {
            console.log('6');
        })
        new Promise(function (resolve) {
            console.log('7');
            resolve();
        }).then(function () {
            console.log('8')
        })

        setTimeout(function () {
            console.log('9');
            process.nextTick(function () {
                console.log('10');
            })
            new Promise(function (resolve) {
                console.log('11');
                resolve();
            }).then(function () {
                console.log('12')
            })
        })
        // 猜想顺序  1, 7, 6, 8, 2, 4, 3, 5, 9, 11, 10, 12
        // node顺序 1, 7, 6, 8, 2, 4, 9, 11, 3, 10, 5, 12
        // 作者： ssssyoki
        // 链接： https: //juejin.im/post/59e85eebf265da430d571f89
        // 来源： 掘金
        // 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
