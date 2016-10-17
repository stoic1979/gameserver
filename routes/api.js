//-------------------------------------------------------------
//
//   ROUTES FOR REST APIs
//
//-------------------------------------------------------------

var express = require('express');
var router = express.Router();

var DB  = require('../models/db');

/* api end points reference page. */
router.get('/', function(req, res, next) {
  res.render('api_demo', { title: 'API Endpoints Are' });
});

/* api demo page */
router.get('/demo', function(req, res, next) {
  res.render('api_demo', { title: 'API Demo' });
});

/* api login */
router.post('/login', function(req, res, next) {
  username = req.body.Username;
  password = req.body.Password;

  // composing query with 'where' clause
  var query = { 
      where: {
        username: username,
        password: password
      }
  };

  DB.User.findAll(query).then(function(users) {
  		
      var ret = {
        err: 1, 
        msg: 'invalid username/password'
      };

  		if(users.length > 0) {
  			   ret.err = 0;
           ret.msg = 'login successful';
  	   	} 
        res.send(JSON.stringify(ret));
	});
    
});

module.exports = router;
