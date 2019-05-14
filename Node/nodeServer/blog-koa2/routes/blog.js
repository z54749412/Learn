const router = require('koa-router')()
router.prefix('/api/blog')

router.get('/list', async (ctx, next) => {
  const query = ctx.query
  console.log(query)
  ctx.body = {
    errno: 0,
    data: ['博客列表']
  }
})

module.exports = router
