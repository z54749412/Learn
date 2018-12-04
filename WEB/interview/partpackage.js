/**
 *
 * @param {number} M => 物品数量
 * @param {number} W => 背包空间
 * @param {Array} arrP => 物品价值
 * @param {Array} arrW => 物品体积
 */
function show(M, W, arrP, arrW) {
    var wholeArr = [];
    var result = 0;
    for(var i = 0; i < M; i++) {
        wholeArr.push({
            p: arrP[i],
            w: arrW[i],
            r: arrP[i]/arrW[i]
        })
    }
    wholeArr.sort(function(obj1, obj2){
        return obj2.r - obj1.r;
    })
    for(var i = 0; i < wholeArr.length; i++) {
        if(wholeArr[i].w <= W) {
            result += wholeArr[i].p;
            W -= wholeArr[i].w;
        }
    }
    return result;
}
let M = 5;
let W = 16;
let arrP = [4, 5, 10, 11, 13]
let arrW = [3, 4, 7, 8, 9]
console.log(show(M, W, arrP, arrW))
