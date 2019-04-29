// 标准输入输出

// process.stdin.pipe(process.stdout)


// 服务方式返回文件
const http = require('http')
const fs = require('fs')
const path = require('path')
const fileName1 = path.resolve(__dirname, 'data.txt')
const server = http.createServer((req, res) => {
  res.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
  if (req.method === 'GET') {
    const readStream = fs.createReadStream(fileName1)
    readStream.pipe(res)
  }
})
server.listen(8000)

// 通过 stream 读取文件

// const fs = require('fs')
// const path = require('path')

// const fileName1 = path.resolve(__dirname, 'data.txt')
// const fileName2 = path.resolve(__dirname, 'data-bak.txt')

// const readStream = fs.createReadStream(fileName1)

// const writeStream = fs.createWriteStream(fileName2)

// readStream.pipe(writeStream)

// readStream.on('data', chunk => {
//   console.log(chunk.toString())
// })

// readStream.on('end', () => {
//   console.log('备份完成！')
// })