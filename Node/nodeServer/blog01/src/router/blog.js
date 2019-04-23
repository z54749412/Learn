const { SuccessModel, ErrorModel } = require('../model/resModel')
const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')

// 登陆验证函数
const loginCheck = (req) => {
  if (!req.session.username) {
    return Promise.resolve(
      new ErrorModel('尚未登陆')
    )
  }
}

const handleBlogRouter = (req, res) => {
  const method = req.method
  const id = req.query.id

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    let author = req.query.author || ''
    const keyword = req.query.keyword || ''
    if (req.query.isadmin) {
      const loginCheckResult = loginCheck(req)
      if (loginCheckResult) {
        return loginCheckResult
      }
      console.log(req.session)
      // 这里创建的博客使用的realname 所以获取时也用realname
      author = req.session.realname
    }
    const result = getList(author, keyword)
    return result.then(listData => {
      return  new SuccessModel(listData)
    })
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const result = getDetail(id)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  // 新建博客详情
  if (method === 'POST' && req.path === '/api/blog/new') {
    const loginCheckResult = loginCheck(req)
    if (loginCheckResult) {
      return loginCheckResult
    }
    const result = newBlog(req.body)
    req.body.author = req.session.username
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  // 修改博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const loginCheckResult = loginCheck(req)
    if (loginCheckResult) {
      return loginCheckResult
    }
    const result = updateBlog(id, req.body)
    return result.then(data => {
      if (data) {
        return new SuccessModel(data)
      } else {
        return new ErrorModel(data)
      }
    })
  }

  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/delete') {
    const loginCheckResult = loginCheck(req)
    if (loginCheckResult) {
      return loginCheckResult
    }
    const author = req.session.username
    const result = deleteBlog(id, author)
    return result.then(data => {
      if (data) {
        return new SuccessModel(data)
      } else {
        return new ErrorModel(data)
      }
    })
  }
}

module.exports = handleBlogRouter