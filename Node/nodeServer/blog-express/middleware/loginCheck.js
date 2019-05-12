const { ErrorModel } = require('../model/resModel')

module.exports = (req, res, next) => {
  if (req.session.realname) {
    next()
    return
  }
  res.json(
    new ErrorModel('尚未登陆')
  )
}