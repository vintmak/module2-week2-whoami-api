var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function(req,res){
	res.json({message:'hooray! Welcome to our API!'})
})
app.use('/api',router);
app.listen(port);
console.log('Magic happens on port '+port)

router.get('/whoami', function(req,res){
	var ip = req.headers['x-forwarded-for'] 
	|| req.connection.remoteAddress ||  
	req.socket.remoteAddress || 
	req.connection.socket.remoteAddress; 
	var language = req.headers["accept-language"]
	var ua = req.headers['user-agent']
	res.json({
		"ipaddress": ip,
		"language": language,
		"software": ua
	})
})
