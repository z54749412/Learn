const xss = require('xss')
const { exec, escape } = require('../db/mysql')

// 获取博客列表
const getList = async (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}' `
  }

  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }

  sql += `order by createtime desc;`
  return await exec(sql)
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
const getDetail = async (id) => {
  const sql = `select * from blogs where id='${id}'`
  const rows = await exec(sql)
  return rows[0]
  // return {
  //   id: 1,
  //   title: '标题1',
  //   content: '内容1',
  //   author: 'zs',
  //   createTime: 1555033326176
  // }
}

// 新建博客
const newBlog = async (blogData = {}) => {
  const title = xss(blogData.title)
  const content = blogData.content
  const author = blogData.author
  const createTime = Date.now()

  const sql = `insert into blogs (title, content, createtime, author) values('${title}', '${content}', ${createTime}, '${author}');`
  const insertData = await exec(sql)
  return {
    id: insertData.insertId
  }
  // return {
  //   id: 3,
  //   blogData
  // }
}

// 更新博客
const updateBlog = async (id, blogData = {}) => {
  const title = blogData.title
  const content = blogData.content

  const sql = `update blogs set title='${title}', content='${content}' where id=${id};`

  const updateData = await exec(sql)
  return !!updateData.changedRows
}

// 删除博客
const deleteBlog = async (id, author) => {
  const sql = `delete from blogs where id=${id} and author='${author}';`

  const delData = await exec(sql)
  return !!delData.affectedRows
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}