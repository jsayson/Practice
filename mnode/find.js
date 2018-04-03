const MongoClient = require('mongodb').MongoClient;
const http = require('http');
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db)=>{
	if(err) throw err;
	let dbc = db.db('try');
	dbc.createCollection("usernames", (err, res)=>{
		if(err) throw err;
		console.log("Collection created");
		db.close();
	});
});


