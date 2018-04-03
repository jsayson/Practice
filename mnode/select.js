const MongoClient = require('mongodb').MongoClient;
const http = require('http');
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db)=>{
	if(err) throw err;
	let dbf = db.db('try');
	dbf.collection('usernames').findOne({}, (err, res)=>{
		if(err) throw err;
		console.log(res.name);
    		db.close();	
	});
});
