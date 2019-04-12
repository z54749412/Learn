const { SuccessModel, ErrorModel } = require('../model/resModel')
const { getList } = require('../controller/blog')

const handleBlogRouter = (req, res) => {
  const method = req.method


  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: '这里是获取博客详情接口'
    }
  }

  // 新建博客详情
  if (method === 'POST' && req.path === '/api/blog/new') {
    return {
      msg: '这里是新建博客详情接口'
    }
  }

  // 修改博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '这里是更新博客详情接口'
    }
  }

  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/delete') {
    return {
      msg: '这里是删除博客详情接口'
    }
  }
}

module.exports = handleBlogRouter