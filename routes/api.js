var express = require('express');
var router = express.Router();

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

    console.log('username:' +  username);
    console.log('password:' +  password);

    //res.render('api_demo', { title: 'API Demo' });
    res.send('Loggin...')
});

module.exports = router;
