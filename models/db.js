/******************************************************
*                                                                                            *
*          DATABASE  AND MODELS                                             *
*                                                                                            *
******************************************************/
var config = require('config');
var dbConfig = config.get('dbConfig');


var Sequelize = require('sequelize');

var users = require('./users');


function db(Sequelize) {


  this.sequelize = new Sequelize(dbConfig.dbName, dbConfig.username, dbConfig.password, {

    dialect: 'mysql',


     //------------------------------------
      // Sqlite settings
      //------------------------------------
     //dialect: 'sqlite',

    // the storage engine for sqlite
    // - default ':memory:'
   // storage: './database.sqlite',

  }),

  // get user model
  this.User = require('./users')(this.sequelize)


}

db.prototype.sync = function(force) {
  this.User.sync({force: force});
};

var DB = new db(Sequelize);

module.exports = DB;

