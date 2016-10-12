//-----------------------------------------------------------
//
//     User Management Module
//
//-----------------------------------------------------------


var path = require ("path");

var models = require ("../models");

var Users = function () {
};

Users.prototype.login = function (req, res) {
	console.log ("User login ... ");

   	var users = models.User.findAll ();

   	console.log("All users : "  +  users);

    res.sendFile (path.join(__dirname, '..', 'public', 'login.html'));
};

Users.prototype.logout = function (req, res) {
   	console.log ("User loging out... ");
   	res.sendFile (path.join(__dirname, '..', 'public', 'login.html'));
};

// export the class
module.exports = Users;