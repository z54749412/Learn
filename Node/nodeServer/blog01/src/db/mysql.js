const mysql = require('mysql')
const MYSQL_CONF = require('../config/db')

// 创建链接对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始链接
con.connect()

// sql 指令

// const sql = 'select * from blogs'

// const sql = `update users set realname='李一' where id=7;`

// const sql = `insert into blogs (title, content, createtime, author) values ('李四博客2', '咋回事呢', 1555291080308, '李四');`

// 统一执行 sql 的函数
function exect (sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
  return promise
}

module.exports = {
  exect
}