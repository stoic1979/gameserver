//--------------------------------------------------------
//
//                ROUTES FOR SERVER
//
//--------------------------------------------------------


var path = require("path");

var Routes = function() {
};

var routes ={
	"routes" : {
		"1"	: "/login",
		"2"	: "/logout",
		"3" : "/addScore",
		"4" : "/getHighestScore",
		"5" : "/getTop10Score",
		"6" : "/routes"
	}
};

Routes.prototype.routes = function (req, res) {
   console.log("Getting all routes... ");
   res.send( routes["routes"]);
};

// export the class
module.exports = Routes;