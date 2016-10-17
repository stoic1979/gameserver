//-------------------------------------------------------------
//
//   USER MODEL
//
//-------------------------------------------------------------

// need sequelize for constants etc
var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    
    var user = 
    {
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
    };

    return sequelize.define('user', user);
}


