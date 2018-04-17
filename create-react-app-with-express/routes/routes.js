module.exports = function(app, db){
	let dbc = db.db('try');
	app.get('/api/movies', (req, res)=>{
		dbc.collection('movies').find({}).toArray((err, docs)=>{
			if(err) throw err;
			res.json(docs);
		});
	});
	// app.get('/api/movies', (req, res)=>{
	// 	dbc.collection('movies').findOne({}, (err, docs)=>{
	// 		res.send(docs);
	// 	})
	// });
};