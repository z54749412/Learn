var express = require('express');
var router = express.Router();

/* GET blog api. */
router.post('/login', function(req, res, next) {
  res.json({
    error: 0,
    data: [1, 2, 3]
  })
});

module.exports = router;
