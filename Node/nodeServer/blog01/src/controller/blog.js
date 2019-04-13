// 获取博客列表
const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题1',
      content: '内容1',
      author: 'zs',
      createTime: 1555033326176
    },
    {
      id: 2,
      title: '标题2',
      content: '内容2',
      author: 'ls',
      createTime: 1555033334302
    }
  ]
}

// 获取博客详情
const getDetail = id => {
  return {
    id: 1,
    title: '标题1',
    content: '内容1',
    author: 'zs',
    createTime: 1555033326176
  }
}

// 新建博客
const newBlog = (blogData = {}) => {
  return {
    id: 3,
    blogData
  }
}

// 更新博客
const updateBlog = (id, blogData = {}) => {
  return true
}

// 删除博客
const deleteBlog = id => {
  console.log(id)
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}