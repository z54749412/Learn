var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { login } = require('../controller/user')

/* GET blog api. */
router.post('/login', function (req, res, next) {
  const { username, password } = req.body
  const result = login(username, password)
  return result.then(data => {
    if (data.username) {
      // 设置 session
      req.session.username = data.username
      req.session.realname = data.realname
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('登陆失败'))
  })
});

router.get('/login-test', function (req, res, next) {
  if (req.session.username) {
    res.json(new SuccessModel({
      username: req.session.username,
      realname: req.session.realname
    }))
    return
  }
  res.json(new ErrorModel('尚未登陆'))
})

router.get('/session-test', function (req, res, next) {
  const session = req.session
  if (session.viewNum == null) {
    session.viewNum = 0
  }
  session.viewNum++
  res.json({
    viewNum: session.viewNum
  })
})
module.exports = router;
