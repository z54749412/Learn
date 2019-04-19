const { SuccessModel, ErrorModel } = require('../model/resModel')
const { login } = require('../controller/user')

// 获取 cookie 过期时间
const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 *1000))
  return d.toGMTString()
}

const handleUserRouter = (req, res) => {
  const method = req.method

  if (method === 'GET' && req.path === '/api/user/login') {
    const { username, password } = req.query
    const result = login(username, password)
    return result.then(data => {
      if (data.username) {
        // 操作 cookie
        res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly; expires=${getCookieExpires}`)

        return new SuccessModel()
      }
      return new ErrorModel('登陆失败')
    })
  }
  // 用户登陆
  // if (method === 'POST' && req.path === '/api/user/login') {
  //   const { username, password } = req.body
  //   const result = login(username, password)
  //   return result.then(data => {
  //     if (data.username) {
  //       return new SuccessModel()
  //     }
  //     return new ErrorModel('登陆失败')
  //   })
  // }

  // 登陆验证测试
  if (method === 'GET' && req.path === '/api/user/login-test') {
    if (req.cookie.username) {
      return Promise.resolve(new SuccessModel({
        username: req.cookie.username
      }))
    }
    return Promise.resolve(new ErrorModel('尚未登陆'))
  }
}

module.exports = handleUserRouter