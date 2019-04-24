const fs = require('fs')
const path = require('path')

const fileName = path.resolve(__dirname, 'data.txt')

// fs.readFile(fileName, (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data.toString())
// })

const content = '这是新写入的内容\n'
const opt = {
  flag: 'a'  // 追加写入，覆盖用 'w'
}
fs.writeFile(fileName, content, opt, err => {
  if (err) {
    console.error(err)
  }
})
