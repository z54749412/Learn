const { SuccessModel, ErrorModel } = require('../model/resModel')
const { login } = require('../controller/user')
const { set } = require('../db/redis')
const handleUserRouter = (req, res) => {
  const method = req.method

  // 用户登陆
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
    const result = login(username, password)
    return result.then(data => {
      if (data.username) {
        // 设置 session
        req.session.username = data.username
        req.session.realname = data.realname
        set(req.sessionId, req.session)
        return new SuccessModel()
      }
      return new ErrorModel('登陆失败')
    })
  }

  // 登陆验证测试
  if (method === 'GET' && req.path === '/api/user/login-test') {
    if (req.session.username) {
      return Promise.resolve(new SuccessModel({
        username: req.session.username,
        realname: req.session.realname
      }))
    }
    return Promise.resolve(new ErrorModel('尚未登陆'))
  }
}

module.exports = handleUserRouter