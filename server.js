var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var mail = require('nodemailer').mail;

var bodyParser = require('body-parser')

var app = express();
var compiler = webpack(config);

app.use( bodyParser() );

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

//app.get('*', function(req, res) {
//  res.sendFile(path.join(__dirname, 'index.html'));
//});
app.use(express.static(path.join(__dirname, 'public')));

app.post('/contact', function(req, res, next) {
	console.log("Post to contact page");
	mail({
		from: "Chase <chase@breezetech.ca>",
		to: "chase@breezetech.ca",
		subject: "A new message has been posted to breezetech.ca",
		text: "Message from: " + req.body.email + "\nname: " + req.body.name + "\nphone: " + req.body.phone + "\nemail: " + req.body.email + "\ncontactType: " + req.body.contactType + "\nmessage: " + req.body.message
	});
	res.send({message: "email sent successfully"});
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
})
