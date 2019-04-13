const fs = require('fs')
const path = require('path')

// const fullFileName = path.resolve(__dirname, 'files', 'a.json')
// fs.readFile(fullFileName, (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(data.toString())
// })


// 回调方式
// function getFileContent (fileName, callback) {
//   const fullFileName = path.resolve(__dirname, 'files', fileName)
//   fs.readFile(fullFileName, (err, data) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     callback(JSON.parse(data.toString()))
//   })
// }

// getFileContent('a.json', aData => {
//   console.log(aData)
//   getFileContent(aData.next, bData => {
//     console.log(bData)
//     getFileContent(bData.next, cData => {
//       console.log(cData)
//     })
//   })
// })

// promise 方式
function getFileContent (fileName) {
  const promise = new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'files', fileName)
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(JSON.parse(data.toString()))
    })
  })
  return promise
}
getFileContent('a.json').then(res => {
  console.log(res)
  return getFileContent(res.next)
}).then(res => {
  console.log(res)
  return getFileContent(res.next)
}).then(res => {
  console.log(res)
})

// async await