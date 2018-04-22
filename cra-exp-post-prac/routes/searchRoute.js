module.exports = function(app, db){
	let dbc = db.db('try');
	app.post('/api/search', (req, res)=>{
		console.log(req.body);
		let item = req.body.item;

		app.get('/api/search/results', (request, result)=>{
			console.log('connected');
			dbc.collection('movies').find({'title': 'The Greatest Showman'}).toArray((err, docs)=>{
				console.log(docs);
				result.json(docs);
			});
		});
		
	})
}