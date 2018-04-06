const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const engines = require('consolidate');
const bodyParser = require('body-parser');


app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname+'/sample');
app.use(bodyParser.urlencoded({ extended: true })); 

MongoClient.connect('mongodb://localhost:27017/', (err, db)=>{
	if(err) throw err;
	console.log('Connected to database');
	let dbc = db.db('try');

	function errorHandle(err, req, res, next){
		console.log(err.message);
		console.log(err.stack);
		res.sendStatus(404);
	}
	
	app.use(errorHandle);

	app.get('/', (req, res, next)=>{
		dbc.collection('usernames').find({}).toArray((err, result)=>{
			res.render('testTogether', {'usernames': result});
		});
	});

	app.post('/usernames', (req, res, next)=>{
		let username = req.body.username;
		if(typeof username == 'undefined'){
			next('please enter a value');
		}
		else{
			res.send('Your username is: '+username);
		}	
	});

	const server = app.listen(8000, ()=>{
		const port = server.address().port;
		console.log('Connected to port: '+port);	
	});
});
