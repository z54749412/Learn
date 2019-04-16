const { exect } = require('../db/mysql')
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
  return exect(sql)
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

  return exect(sql).then(rows => {
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
  return exect(sql).then(insertData => {
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
  let sql = `update blogs set state='1' `

  if (content) {
    sql += `, content='${content}' `
  }

  if (title) {
    sql += `, title='${title}' `
  }

  sql += `where id=${id};`
  return exect(sql).then(updateData => {
    return !!updateData.changedRows
  })
}

// 删除博客
const deleteBlog = id => {
  const sql = `delete from blogs where id=${id};`
  return exect(sql).then(delData => {
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