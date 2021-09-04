var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // request came in here

  res.send('This is the home URL terminating the request')
  // res.render('index', { title: 'Express' });
});

module.exports = router;
