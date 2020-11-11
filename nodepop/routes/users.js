var express = require('express');
var router = express.Router();
var createError = require('http-errors');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
