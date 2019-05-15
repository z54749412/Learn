const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')
// 用户登陆接口
const login = async (username, password) => {
  username = escape(username)

  // 生成加密密码
  password = genPassword(password)

  password = escape(password)

  const sql = `select username, realname from users where username=${username} and password=${password};`
  const loginInfo = await exec(sql)
  return loginInfo[0] || {}
}

module.exports = {
  login
}