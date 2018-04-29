const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8001;

const dbUrl = require('./database/');

MongoClient.connect(dbUrl.url, (err, db)=>{

	if(err) throw err;
	console.log('We are connected to our database');

	require('./routes/index.js')(app, db);

	const server = app.listen(port, ()=>{
		port = server.address().port;
		console.log('We are live on port: '+ port);
	});
});