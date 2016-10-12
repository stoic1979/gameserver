//-----------------------------------------------------------
//
//     API demo module
//
//-----------------------------------------------------------

var path = require ("path");


var API = function() {
}; 


API.prototype.login = function(req, res){
	console.log("API demo login");

	username = req.query.username;
	password = req.query.password;



	if (typeof(username) == 'undefined' && username == null && typeof(password) == 'undefined' && password == null){		
		res.sendFile( path.join( __dirname, "..", "public", "login.html"));
	}

		// username and password are vaild
	 else if (username == 'game' && password == 'server'){
				var login_succes = '{ "error" : 0 ,	"message" : "Successfully login" }';
				resp_json = JSON.parse(login_succes);
				res.send(resp_json);
	} 
	   //username/password not valid
	else {
			console.log("Invalid username ");

			var login_fail = '{ "error" : 1 ,	"message" : "Invalid Username/Password" }';
			resp_json = JSON.parse(login_fail);
			res.send(resp_json);
	}
};



//exporting api_demo
module.exports = API; 