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
      username: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.BIGINT
      },
    };

    var Score = sequelize.define('score', score);


    return Score;
}


