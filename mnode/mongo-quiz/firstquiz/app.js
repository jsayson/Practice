const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const engines = require('consolidate');
const bodyParser = require('body-parser');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname+'/layout');
app.use(bodyParser.urlencoded({ extended: true })); 

MongoClient.connect('mongodb://localhost:27017/try', (err, db)=>{
	if(err) throw err;
	console.log('connected to database');
	const dbc = db.db('try');

	//error handling
	function errorHandle(err, req, res, next){
		console.log(err.message);
		console.log(err.stack);
		res.sendStatus(500);
	}
	
	app.use(errorHandle);

	/*app.post('/', (req, res, next)=>{
		let title = req.body.title;
		let year = req.body.year;
		let imdb = req.body.imdb;
		if(title == 'undefined' || year == 'undefined' || imdb == 'undefined'){
			next('One or more input is empty');
		}
		else{	
			dbc.collection('movies').insertOne({'title': title, 'year': year, 'imdb': imdb});
			console.log('One row affected');
		}
	});*/
	
	app.get('/', (req, res)=>{
		res.render('view', {});
	});
	
	app.post('/Accepted', (req, res, next)=>{
		let title = req.body.title;
		let year = req.body.year;
		let imdb = req.body.imdb;
		let r_imdb = req.body.r_imdb;
		let r_tomato = req.body.r_tomato;
		if(typeof title == 'undefined' || typeof year == 'undefined' || typeof 	imdb == 'undefined' || typeof r_imdb == 'undefined' || typeof r_tomato == 'undefined'){
			next('One or more input is empty');
		}
		else{	
			dbc.collection('movies').insertOne({'title': title, 'year': year, 'rating': {'imdb': r_imdb, 'tomato': r_tomato}, 'imdb': imdb});
			res.send('Title: '+title+'\nYear: '+year+'\nIMDB: '+imdb);
			console.log('One row affected');
		}
		
	});
	
	app.get('/Movies', (req, res)=>{
		dbc.collection('movies').find({}).toArray((err, rec)=>{
			res.render('movies', {'records': rec});
		});
	});
	
	const server = app.listen(8000, ()=>{
		const port = server.address().port;
		console.log('connected to port: '+port);
	});
	
});
