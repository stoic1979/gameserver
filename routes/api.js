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

    var where = {
    	username: username,
    	password: password
  	};

    DB.User.findAll({where: where}).then(function(users) {
  		console.log(users)
  		if(users.length > 0) {
  			res.send("{'err': 0, 'msg': 'login successful'}");
  	   	} else {
  	   		res.send("{'err': 1, 'msg': 'invalid username/password'}");
  	   }
	});
    
});

module.exports = router;
