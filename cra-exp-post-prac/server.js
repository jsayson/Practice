const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended:true
}));

//dburl
const dbUrl = require('./database');

//port 
let port = process.env.PORT || 8000;

MongoClient.connect(dbUrl.url, (err, db)=>{

	if(err) throw err;
	console.log('Connected to database');

	//passing data to routes
	require('./routes/')(app, db);

	//server
	const server = app.listen(port, ()=>{

		let port = server.address().port;
		console.log('connected to port: '+ port);
		
	});

});