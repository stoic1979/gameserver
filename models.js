/******************************************************
*                                                                                            *
*          DATABASE  AND MODELS                                             *
*                                                                                            *
******************************************************/

var Sequelize = require('sequelize');

var sequelize = new Sequelize('baccaratdb', 'root', '', {

  dialect: 'mysql',

});

//--------------------------------------
// User model
//--------------------------------------
var User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});


//--------------------------------------
// Score model
//--------------------------------------
var Score = sequelize.define('score', {
  score: {
    type: Sequelize.INTEGER
  },
});


User.sync({force: false});


module.exports = {
	User : User
};


User.findAll().then(function(users) {
  console.log(users)
})

