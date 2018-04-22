	module.exports = function(app, db){
	let dbc = db.db('try');
	// app.get('/api/movies', (req, res)=>{
	// 	dbc.collection('movies').find({}).toArray((err, docs)=>{
	// 		res.json(docs);
	// 	});
	// });
	// app.post('/submitted', (req ,res)=>{
	// 	console.log('hi ' + req.body);
	// });
	app.post('/api/submitted', (req, res)=>{
		console.log(req.body.imdbLink);
		let title = req.body.title;
		let year = req.body.year;
		let imdbLink = req.body.imdbLink;	
		let r_tomato = req.body.r_tomato;
		let r_imdb = req.body.r_imdb;
		if(title === '' || year === '' || imdbLink === '' || r_tomato === '' || r_imdb === ''){
			res.sendStatus(404);
		}
		else{
			dbc.collection('movies').insertOne({
					title: title,
					year: year,
					rating: {imdb: r_imdb,
							tomato: r_tomato},
					imdb: imdbLink
				}, (err, result)=>{
					if(err) throw err;
					console.log('Inserted on row: '+ result);
				});
				res.send('Submitted');	
			});
		}
		
};
