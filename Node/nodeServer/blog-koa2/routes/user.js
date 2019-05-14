const router = require('koa-router')()
router.prefix('/api/user')

router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body
  ctx.body = {
    errorno: 0,
    username,
    password
  }
})

module.exports = router
