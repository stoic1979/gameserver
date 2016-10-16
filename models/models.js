/******************************************************
*                                                                                            *
*          DATABASE  AND MODELS                                             *
*                                                                                            *
******************************************************/

var Sequelize = require('sequelize');

var sequelize = new Sequelize('baccaratdb', 'root', '', {

  //dialect: 'mysql',


  //------------------------------------
  // Sqlite settings
  //------------------------------------
  dialect: 'sqlite',

  // the storage engine for sqlite
  // - default ':memory:'
  storage: './database.sqlite',

});

//--------------------------------------
// User model
//--------------------------------------
var User = sequelize.define('user', {
  username: {
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

/*User.create({
    username: 'john',
    password: '123'
  });
*/

/*
module.exports = {
	User : User,
  sequelize: sequelize,
};
*/
module.exports = User;


/*User.findAll().then(function(users) {
  console.log(users)
});
*/
