const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const engines = require('consolidate');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname+'/sample');


MongoClient.connect('mongodb://localhost:27017/', (err, db)=>{
	if(err) throw err;
	console.log('connected to database');
	const dbc = db.db('try');
	app.get('/', (req, res)=>{
		dbc.collection('usernames').find({}).toArray((err, docs)=>{
			res.render('sample', {'usernames': docs});		
		});
	});
	
	app.use((req, res)=>{
		res.sendStatus(404);
	});
	
	const server = app.listen(3000, ()=>{
		const port = server.address().port;
		console.log('Connected to port: '+port);  	
	});
	
});
