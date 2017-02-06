var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var morgan = require('morgan');
var passport = require('passport');
var jwt = require('jwt-simple')
var payload = { foo: 'bar' };
var secret = 'xxx';


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(passport.initialize());



app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/create_token', function (req, res) {
	var token = jwt.encode(payload, secret);
	var date = new Date();
	res.json({success: true, token: token, date: new Date().getTime() / 1000});
})

app.post('/check_token', function (req, res) {
	var req = req.body;
	var token = JSON.parse(req.token);
	
	if(token && new Date().getTime() / 1000 - req.date < 10) {
		res.json({success: true});
	} else { 
		return res.status(401).send({success: false, msg: 'Authentication failed.'});
	}
})

app.listen(3100, function () {
  console.log('Example app listening on port 3100!')
});