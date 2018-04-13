const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const db = require('./app/db/db');

let port = process.env.PORT || 8000; 

app.use(bodyParser.urlencoded({ extended: true}));

MongoClient.connect(db.url, (err, data)=>{
	if(err) throw err;
	console.log('Connected to database');

require('./app/routes')(app, data);

const server = app.listen(port, ()=>{
	let port = server.address().port;
	console.log('We are live on port: '+ port);
});

});
