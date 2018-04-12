const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

let port = process.env.PORT || 8000;

MongoClient.connect('mongodb://localhost:27017/try', (err, db)=>{
	if(err) throw err;
	console.log('connected to database: '+db.db('try'));
	const dbc = db.db('try');
	app.get('/api/movies', (req, res)=>{
		dbc.collection('movies').find({}, (err, result)=>{
			result.forEach((docs, index)=>{
				res.send({docs});
			});
		});
	});
	app.use((req, res)=>{
		res.sendStatus(404);
	});
	const server = app.listen(port, (req, res)=>{
		let port = server.address().port;
		console.log('connected to port'+ port);
	});
});
