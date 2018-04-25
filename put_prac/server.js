const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const engines = require('consolidate');
const bodyParser = require('body-parser');

//our port 
let port = process.env.PORT || 8000;

//our database url
const dbUrl = require('./database/');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname+'/layout');
//our bodyparser
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(dbUrl.url, (err, db)=>{

	require('./routes/')(app, db);

	//this is our port server
	const server = app.listen(port, ()=>{
		let port = server.address().port;
		console.log('We are live on port: '+port);
	});

});