var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

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
	res.send({message: "email sent successfully"});
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
})
