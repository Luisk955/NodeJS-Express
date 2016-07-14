var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hola Mundo');
});

app.listen(3000, function(){
	console.log('App running in port 3000')
});