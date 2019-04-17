const { exec } = require('../db/mysql')
// 获取博客列表
const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}' `
  }

  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }

  sql += `order by createtime desc;`
  return exec(sql)
  // return [
  //   {
  //     id: 1,
  //     title: '标题1',
  //     content: '内容1',
  //     author: 'zs',
  //     createTime: 1555033326176
  //   },
  //   {
  //     id: 2,
  //     title: '标题2',
  //     content: '内容2',
  //     author: 'ls',
  //     createTime: 1555033334302
  //   }
  // ]
}

// 获取博客详情
const getDetail = id => {
  const sql = `select * from blogs where id='${id}'`

  return exec(sql).then(rows => {
    return rows[0]
  })
  // return {
  //   id: 1,
  //   title: '标题1',
  //   content: '内容1',
  //   author: 'zs',
  //   createTime: 1555033326176
  // }
}

// 新建博客
const newBlog = (blogData = {}) => {
  const title = blogData.title
  const content = blogData.content
  const author = blogData.author
  const createTime = Date.now()

  const sql = `insert into blogs (title, content, createtime, author) values('${title}', '${content}', ${createTime}, '${author}');`
  return exec(sql).then(insertData => {
    return {
      id: insertData.insertId
    }
  })
  // return {
  //   id: 3,
  //   blogData
  // }
}

// 更新博客
const updateBlog = (id, blogData = {}) => {
  const title = blogData.title
  const content = blogData.content

  const sql = `update blogs set title='${title}', content='${content}' where id=${id};`

  return exec(sql).then(updateData => {
    return !!updateData.changedRows
  })
}

// 删除博客
const deleteBlog = (id, author) => {
  const sql = `delete from blogs where id=${id} and author='${author}';`
  return exec(sql).then(delData => {
    return !!delData.affectedRows
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}