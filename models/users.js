var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    
    var user = 
    {
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    };

    return sequelize.define('user', user);
}


