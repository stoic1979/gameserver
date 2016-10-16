/******************************************************
*                                                                                            *
*          DATABASE  AND MODELS                                             *
*                                                                                            *
******************************************************/

var Sequelize = require('sequelize');


function db(Sequelize) {


  this.sequelize = new Sequelize('baccaratdb', 'root', '', {

      //dialect: 'mysql',


     //------------------------------------
      // Sqlite settings
      //------------------------------------
     dialect: 'sqlite',

    // the storage engine for sqlite
    // - default ':memory:'
    storage: './database.sqlite',

  }),

  //--------------------------------------
  // User model
  //--------------------------------------
  this.User = this.sequelize.define('user', {
    username: {
     type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
   }
  });


}


var DB = new db(Sequelize);

module.exports = DB;

