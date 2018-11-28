function findNQueenMethods(num) {
    function setQueen(iQueen) {
        if (iQueen == num) {
            // console.log(posArr)
            posArrAll.push(JSON.parse(JSON.stringify(posArr)));
            methods++;
            return;
        }

        for (var i = 0; i < num; i++) {

            if (allPoint[iQueen * num + i].index == -1) {
                allPoint[iQueen * num + i].index = iQueen;
                posArr.push(allPoint[iQueen * num + i]);
                var x = allPoint[iQueen * num + i].x;
                var y = allPoint[iQueen * num + i].y;

                for (var j = 0; j < allPoint.length; j++) {
                    if (allPoint[j].index == -1 && (allPoint[j].x == x || allPoint[j].y == y || allPoint[j].x - allPoint[j].y == x - y || allPoint[j].x + allPoint[j].y == x + y)) {
                        allPoint[j].index = iQueen;
                    }
                }

                setQueen(iQueen + 1);

                //回溯
                posArr.pop();
                for (var j = 0; j < allPoint.length; j++) {
                    if (allPoint[j].index == iQueen) {
                        allPoint[j].index = -1;
                    }
                }

            }
        }
    }
    let all = num * num
    let allPoint = []
    let methods = 0;
    let posArr = [];
    let posArrAll = [];
    for (let i = 0; i < all; i++) {
        allPoint[i] = {
            index: -1
        }
    }
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            allPoint[i * num + j].x = j;
            allPoint[i * num + j].y = i;
        }
    }
    setQueen(0)
    return methods
}

console.log(findNQueenMethods(8))
