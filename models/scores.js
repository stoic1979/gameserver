//-------------------------------------------------------------
//
//   SCORE MODEL
//
//-------------------------------------------------------------

// need sequelize for constants etc
var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    
    var score = 
    {
      userid: {
        type: Sequelize.BIGINT
      },
      value: {
        type: Sequelize.BIGINT
      },
    };

    return sequelize.define('score', score);
}


