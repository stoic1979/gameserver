var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('api_demo', { title: 'API Endpoints Are' });
});

/* GET home page. */
router.get('/demo', function(req, res, next) {
  res.render('api_demo', { title: 'API Demo' });
});

module.exports = router;
