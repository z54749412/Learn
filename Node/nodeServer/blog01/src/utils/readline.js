const fs = require('fs')
const path = require('path')
const readline = require('readline')

const fileName = path.join(__dirname, '../', '../', 'logs', 'access.log')

// 创建 read stream
const readStream = fs.createReadStream(fileName)

// 创建readline 对象
const rl = readline.createInterface({
  input: readStream
})

let chromeNum = 0
let sum = 0

// 逐行读取
rl.on('line', lineData => {
  if (!lineData) {
    return
  }
  sum++

  const arr = lineData.split(' -- ')
  if (arr[2] && arr[2].indexOf('Chrome') > 0) {
    chromeNum++
  }
})

rl.on('close', () => {
  console.log(`Chrome浏览器占比${((chromeNum/sum)*100).toFixed(2)}%`)
})
