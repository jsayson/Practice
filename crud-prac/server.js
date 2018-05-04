const app = require('express')();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');


let port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

dbPort = require('./database/');

MongoClient.connect(dbPort.url, (err, db)=>{

	if(err) throw err;
	console.log('We are connected to our database');

	require('./routes/')(app, db);

	const server = app.listen(port, ()=>{
		let port = server.address().port;
		console.log('We are live on port: '+port); 
	});
});