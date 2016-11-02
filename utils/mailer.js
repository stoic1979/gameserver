var nodemailer = require('nodemailer');

function mailer() {

	this.transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'superguru.coolbaba2016@gmail.com', // Your email id
            pass: 'superadmin@1234' // Your password
        }
    });

}//mailer

mailer.prototype.sendForgotPasswordEmail = function(to, subject, text) {

	console.log("[mailer] sending forgot password email...");

	var mailOptions = {
    	from: 'superguru.coolbaba2016@gmail.com', // sender address
    	to: to, // list of receivers
    	subject: subject, // Subject line
    	text: text //, // plaintext body
    	// html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
	};


	this.transporter.sendMail(mailOptions, function(error, info){
    	if(error){
        	console.log(error);
        	//res.json({yo: 'error'});
    	}else{
	        console.log('Message sent: ' + info.response);
    	    //	res.json({yo: info.response});
    	};
	});

};

var Mailer = new mailer();

module.exports = Mailer;