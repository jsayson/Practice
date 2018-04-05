const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const engines = require('consolidate');


app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/sample');

MongoClient.connect('mongodb://localhost:27017/try', (err, db)=>{
	if(err) throw err;
	console.log('Connected to database!');
	let dbc = db.db('try');
	app.get('/', (req, res)=>{
		dbc.collection('usernames').find({name: 'one'}).toArray((err, result)=>{
			res.render('sample', {'username': result});
		});
	});

	app.use((req, res)=>{
		res.sendStatus(404);
	});
	
	const server = app.listen(8000,()=>{
		const port = server.address().port;
		console.log('Connected to port: '+port);
	});
 
});

