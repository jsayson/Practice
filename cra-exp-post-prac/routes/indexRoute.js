module.exports = function(app, db){
	let dbc = db.db('try');
	// app.get('/api/movies', (req, res)=>{
	// 	dbc.collection('movies').find({}).toArray((err, docs)=>{
	// 		res.json(docs);
	// 	});
	// });
	app.post('/api/submitted', (req ,res)=>{
		console.log('hi ' + req.body);
	});
};