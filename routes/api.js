//-------------------------------------------------------------
//
//   ROUTES FOR REST APIs
//
//-------------------------------------------------------------

var express = require('express');
var router  = express.Router();
var DB      = require('../models/db');


//----------------------------------------------
// API END POINTS LIST
//----------------------------------------------
router.get('/', function(req, res, next) {
  res.render('api_demo', { title: 'API Endpoints Are' });
});

//----------------------------------------------
// DEMO PAGE
//----------------------------------------------
router.get('/demo', function(req, res, next) {
  res.render('api_demo', { title: 'API Demo' });
});

//----------------------------------------------
// LOGIN API
//----------------------------------------------
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

//----------------------------------------------
// REGISTER API
//----------------------------------------------
router.post('/register', function(req, res, next) {
  username = req.body.Username;
  password = req.body.Password;
  email    = req.body.Email;

  // composing query with 'where' clause
  // needed to ensure that username should
  // not exist in db
  var query = { 
      where: {
        username: username
      }
  };

  DB.User.findAll(query).then(function(users) {
      
      var ret = {
        err: 1, 
        msg: 'username already exists'
      };

      if(users.length == 0) {
        DB.User.create({username: username, password:password, email: email});
        ret.err = 0;
        ret.msg = 'registration successful'
      } 
      
      res.send(JSON.stringify(ret));
  });
    
});

//----------------------------------------------
// ADD SCORE API
//----------------------------------------------
router.post('/add_score', function(req, res, next) {
  userid = req.body.Userid;
  score  = req.body.Score;

  // composing query with 'where' clause
  // needed to ensure that userid is valid
  var query = { 
      where: {
        id: userid
      }
  };

  DB.User.findAll(query).then(function(users) {
      
      var ret = {
        err: 1, 
        msg: 'invalid userid'
      };

      if(users.length > 0) {
        DB.Score.create({userId: userid, value:score});
        ret.err = 0;
        ret.msg = 'score added successfully'
      } 
      
      res.send(JSON.stringify(ret));
  });
    
});

//----------------------------------------------
// GET HIGH SCORE API
//----------------------------------------------
router.post('/get_high_score', function(req, res, next) {

  // get high score upto 'n'
  n = parseInt(req.body.n);

 var query = {
    offset: 0,
    limit: n,
    order: 'value DESC',
    attributes: ['userid', 'value']
  }

  DB.Score.findAll(query).then(function(scores) {

      for(var i in scores) {
        console.log("---score=" + scores[i]);

        scores[i].getUser().then(function(user) {
            console.log('-- got user = ' + user);
        });

      }
      //console.log(scores);
      res.send(JSON.stringify(scores));
  });
    
});


//----------------------------------------------
// GET USERNAMES
//----------------------------------------------
router.get('/get_usernames', function(req, res, next) {

  var query = {
    order: 'username ASC',
    attributes: ['id', 'username', 'email'] // not password
  }

  DB.User.findAll(query).then(function(users) {
      res.send(JSON.stringify(users));
  });
    
});


module.exports = router;
