//--------------------------------------------------------
//
//                GAME SERVER
//
//--------------------------------------------------------


var express = require('express');
var app = express();
var fs = require("fs");

// importing modules
var Users  = require("./views/users.js");
var Scores = require("./views/scores.js");
var Routes = require("./views/routes.js");
var API = require("./views/api.js"); 

var users  = new Users();
var routes = new Routes();
var scores = new Scores();
var api = new API();

// static folder to fetch html, css, etc.
app.use(express.static('public'));

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("GET homepage");
   res.sendFile( __dirname + "/" + "index.html" );
})

//user login url
app.get('/login', users.login);

//add score url
app.get('/addScore/', scores.addScore);

app.get('/getHighestScore/', scores.getHighestScore);

// this responds top 10 score 
app.get('/getTop10Score/', scores.getTop10Score);

// This responds with all routes 
app.get('/routes', routes.routes);

//test url
app.get('/logged_in/', function(req, res){
	console.log("User logged in ");
	
	var username = req.query.name
	var password = req.query.password
	
	console.log("------------[ Logs for user login ]---------------");
    console.log(" Username: " +  username);
	console.log(" Password: " +  password);
    console.log("--------------------------------------------------");

	res.send("<p align=center> Username : " + username +"</p>"+
			 "<p align=center> Password : " + password +"</p>");
});


//api demo urls
app.get('/api_login/', api.login);







var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Game Server listening at http://%s:%s", host, port)
})