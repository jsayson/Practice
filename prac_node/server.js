const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
const engines = require('consolidate');

const data = require('./app/database/database');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname+'/app/layouts');

app.use(bodyParser.urlencoded({extended: true}));

let port = process.env.PORT || 8000;

MongoClient.connect(data.url, (err, db)=>{
	if(err) throw err;
	require('./app/routes')(app, db);
 
	const server = app.listen(port, ()=>{
		let port = server.address().port;
		console.log('We are live on port: '+port);
	});

});


