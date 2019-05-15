const { ErrorModel } = require('../model/resModel')

module.exports = async (ctx, next) => {
  if (ctx.session.realname) {
    await next()
    return
  }
  ctx.body(
    new ErrorModel('尚未登陆')
  )
}