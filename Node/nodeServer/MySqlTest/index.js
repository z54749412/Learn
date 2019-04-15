const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  port: '3306',
  database: 'myblog'
  // insecureAuth : true
})

con.connect()

const sql = 'select * from blogs'

// const sql = `update users set realname='李一' where id=7;`

// const sql = `insert into blogs (title, content, createtime, author) values ('李四博客2', '咋回事呢', 1555291080308, '李四');`

con.query(sql, (err, result) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(result)
})

con.end()