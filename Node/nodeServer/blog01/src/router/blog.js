const { SuccessModel, ErrorModel } = require('../model/resModel')
const { getList,getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')

const handleBlogRouter = (req, res) => {
  const method = req.method
  const id = req.query.id

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const detailInfo = getDetail(id)
    return new SuccessModel(detailInfo)
  }

  // 新建博客详情
  if (method === 'POST' && req.path === '/api/blog/new') {
    const result = newBlog(req.body)
    return new SuccessModel(result)
  }

  // 修改博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    if (result) {
      return new SuccessModel(result)
    } else {
      return new ErrorModel(result)
    }
  }

  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/delete') {
    const result = deleteBlog(id)
    if (result) {
      return new SuccessModel(result)
    } else {
      return new ErrorModel(result)
    }
  }
}

module.exports = handleBlogRouter