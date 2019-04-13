// 用户登陆接口
const login = (username, password) => {
  if (username === 'zs' && password === '123456') {
    return true
  }
  return false
}

module.exports = {
  login
}