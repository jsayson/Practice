const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//our body-parser
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

//db port
const dbPort = require('./database/database');

//port 
let port = process.env.PORT || 3001;

//connecting to mongoclient
MongoClient.connect(dbPort.url, (err, db)=>{

	if(err) throw err;
	console.log('We are connected to our database');

	//passing our db and app to our route
	require('./routes')(app, db);

	const server = app.listen(port, ()=>{
		let port = server.address().port;
		console.log('We are live on port: '+port);
	});

});