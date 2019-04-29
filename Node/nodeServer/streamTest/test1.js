// 标准输入输出

// process.stdin.pipe(process.stdout)


// const http = require('http')

// const server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     req.pipe(res)
//   }
// })
// server.listen(8000)

// 通过 stream 读取文件

const fs = require('fs')
const path = require('path')

const fileName1 = path.resolve(__dirname, 'data.txt')
const fileName2 = path.resolve(__dirname, 'data-bak.txt')

const readStream = fs.createReadStream(fileName1)

const writeStream = fs.createWriteStream(fileName2)

readStream.pipe(writeStream)

readStream.on('end', () => {
  console.log('备份完成！')
})