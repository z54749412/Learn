/**
 * 给定一个数组排序，使得奇数位的值不大于相邻偶数位的值。
 */
var ori = [10,11,12,13,28,24,25,26,29]

function recombinationArr (arr) {
  let tmp = [...arr].sort((a, b) => a - b)
  let result = []
  let mid = Math.ceil(arr.length / 2)
  let odd = tmp.splice(0, mid)
  let even = tmp
  let oddIndex = 0;
  let eventIndex = 0;
  for(let i = 0; i < arr.length; i++) {
    if (i%2 === 0) {
      result.push(odd[oddIndex])
      oddIndex++
    } else {
      result.push(even[eventIndex])
      eventIndex++
    }
  }
  return result;
}
console.log(recombinationArr(ori))