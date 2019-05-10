var express = require('express');
var router = express.Router();

/* GET blog api. */
router.post('/login', function(req, res, next) {
  const { username, password } = req.body
  res.json({
    error: 0,
    data: {
      username,
      password
    }
  })
});

module.exports = router;
