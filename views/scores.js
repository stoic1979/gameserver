//--------------------------------------------------------
//
//                SCORE MANAGER
//
//--------------------------------------------------------


var path = require("path");

var Scores = function() {
};


Scores.prototype.addScore = function (req, res) {
   console.log("adding Score ... ");
   res.sendFile(path.join(__dirname, '..', 'public', 'addScore.html'));
};


Scores.prototype.getHighestScore = function (req, res) {
   console.log("Getting high score .. ");
   res.sendFile(path.join(__dirname, '..', 'public', 'getHighestScore.html'));
};


Scores.prototype.getTop10Score = function (req, res) {
   console.log("Getting top 10 score .. ");
   res.sendFile(path.join(__dirname, '..', 'public', 'getTop10Score.html'));
};


// export the class
module.exports = Scores;