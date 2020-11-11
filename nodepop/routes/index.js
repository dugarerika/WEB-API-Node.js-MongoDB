var express = require('express');
var router = express.Router();
var createError = require('http-errors');
// Object Destructuring
const {query, validationResult} = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// recibir parametros en query string
router.get('/queryString', (req, res, next) => {
  console.log(req.query);
  res.send('ok');
});

// recibir parametros en el body

module.exports = router;
