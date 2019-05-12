var express = require('express');
var router = express.Router();
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')
const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')

/* GET blog api. */
router.get('/list', function (req, res, next) {
  console.log('is admin, but no login')
  let author = req.query.author || ''
  const keyword = req.query.keyword || ''
  if (req.query.isadmin) {
    if (req.session.realname == null) {
      // 未登陆
      res.json(
        new ErrorModel('未登录')
      )
      return
    }
    // 这里创建的博客使用的realname 所以获取时也用realname
    author = req.session.realname
  }
  const result = getList(author, keyword)
  return result.then(listData => {
    res.json(new SuccessModel(listData))
  })
});


// 获取博客详情
router.get('/detail', function (req, res, next) {
  console.log(1111111)
  const result = getDetail(req.query.id)
  return result.then(data => {
    res.json(new SuccessModel(data))
  })
});

// 新建博客详情
router.post('/new', loginCheck, function (req, res, next) {
  req.body.author = req.session.realname
  const result = newBlog(req.body)
  return result.then(data => {
    res.json(new SuccessModel(data))
  })
});

// 修改博客
router.post('/update', loginCheck, function(req, res, next) {
  const result = updateBlog(req.query.id, req.body)
  return result.then(data => {
    if (data) {
      res.json(new SuccessModel(data))
    } else {
      res.json(new ErrorModel(data))
    }
  })
});

// 删除博客
router.post('/delete', loginCheck, function(req, res, next) {
  const author = req.session.realname
  const result = deleteBlog(req.query.id, author)
  return result.then(data => {
    if (data) {
      res.json(new SuccessModel(data))
    } else {
      res.json(new ErrorModel(data))
    }
  })
});

module.exports = router;
