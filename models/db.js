/******************************************************
*                                                                                            *
*          DATABASE  AND MODELS                                             *
*                                                                                            *
******************************************************/
var config = require('config');
var dbConfig = config.get('dbConfig');


var Sequelize = require('sequelize');

var users = require('./users');
var scores = require('./scores');


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

   // get score model
  this.Score = require('./scores')(this.sequelize)

  // add Foregin key User to Score Model
  //this.User.hasOne(this.Score);

  this.Score.belongsTo(this.User);


}

db.prototype.sync = function(force) {
  this.User.sync({force: force});
  this.Score.sync({force: force}); 
};

var DB = new db(Sequelize);

module.exports = DB;

