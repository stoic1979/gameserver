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
      value: {
        type: Sequelize.BIGINT
      },
    };

    var Score = sequelize.define('score', score, {
    instanceMethods: {
      getUser: function() {
        console.log("++++++++++++++++++++++++++++ RETURNING abc ++++++++++++++++++++++++++++++");
        return 'abc';
      }
    }
  });


    return Score;
}


