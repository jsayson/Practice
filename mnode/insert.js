const MongoClient = require('mongodb').MongoClient;
const http = require('http');
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db)=>{
	if(err) throw err;
	let dbi = db.db('try');
	let username = {name: 'light'};
	dbi.collection('usernames').insertOne(username, (err, res)=>{
		if(err) throw err;
		console.log('Inserted: '+username.name);
		db.close();
	});
});
