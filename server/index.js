var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var passport = require('passport');
var jwt = require('jwt-simple')

var secret = 'xxx';


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());



app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/create_token', function (req, res) {
	var token = jwt.encode({
	foo: 'bar',
	exp: Date.now()
	}, secret);

	res.json({success: true, token: token});
})

app.post('/check_token', function (req, res) {
	var req = req.body;
	var token = JSON.parse(req.token);
	var decoded = jwt.decode(token, secret);
	if((Date.now() - decoded.exp) / 1000 < 30) {
		res.json({success: true});
	} else {
		return res.status(401).send({success: false, msg: 'Authentication failed.'});
	}
})

app.listen(3100, function () {
  console.log('Example app listening on port 3100!')
});