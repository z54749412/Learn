/**
 *
 * @param {number} M => 物品数量
 * @param {number} W => 背包空间
 * @param {Array} arrP => 物品价值
 * @param {Array} arrW => 物品体积
 */
function show(M, W, arrP, arrW){
    var result = [];
    for(var i = 0; i <= M; i++){
        result[i] = []
        for(var j = 0; j <= W; j++){
             if (i == 0) {
                 result[i][j] = 0;
             } else if (arrW[i - 1] > j) {
                 result[i][j] = result[i - 1][j]
             } else {
                 result[i][j] = Math.max(arrP[i - 1] + result[i - 1][j - arrW[i - 1]], result[i - 1][j]);
             }
        }
    }
    return result[i - 1][j - 1];
}
let M = 5;
let W = 16;
let arrP = [4,5,10,11,13]
let arrW = [3,4,7,8,9]
console.log(show(M, W, arrP, arrW))
