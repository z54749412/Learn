const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')
const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')
router.prefix('/api/blog')

router.get('/list', async (ctx, next) => {
  let author = ctx.query.author || ''
  const keyword = ctx.query.keyword || ''
  if (ctx.query.isadmin) {
    if (ctx.session.realname == null) {
      // 未登陆
      ctx.body = new ErrorModel('未登录')
      return
    }
    // 这里创建的博客使用的realname 所以获取时也用realname
    author = ctx.session.realname
  }
  const listData = await getList(author, keyword)
  ctx.body = new SuccessModel(listData)
})

router.get('/detail', async (ctx, next) => {
  const data = await getDetail(ctx.query.id)
  ctx.body = new SuccessModel(data)
})

router.post('/new', loginCheck, async (ctx, next) => {
  let body = ctx.request.body
  body.author = ctx.session.realname
  const data = await newBlog(body)
  ctx.body = new SuccessModel(data)
})

router.post('/update', loginCheck, async (ctx, next) => {
  const data = await updateBlog(ctx.query.id, ctx.request.body)
  if (data) {
    ctx.body = new SuccessModel(data)
  } else {
    ctx.body = new ErrorModel(data)
  }
})

router.post('/delete', loginCheck, async (ctx, next) => {
  const author = ctx.session.realname
  const data = await deleteBlog(ctx.query.id, author)
  if (data) {
    ctx.body = new SuccessModel(data)
  } else {
    ctx.body = new ErrorModel(data)
  }
})

module.exports = router
