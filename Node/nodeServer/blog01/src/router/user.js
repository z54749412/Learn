const { SuccessModel, ErrorModel } = require('../model/resModel')
const { login } = require('../controller/user')

const handleUserRouter = (req, res) => {
  const method = req.method

  // 用户登陆
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body
    const result = login(username, password)
    if (result) {
      return new SuccessModel(result)
    } else {
      return new ErrorModel(result)
    }
  }
}

module.exports = handleUserRouter