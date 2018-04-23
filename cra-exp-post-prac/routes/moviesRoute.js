module.exports = function(app, db){
	dbc = db.db('try');
	app.get('/api/movies', (req, res)=>{
		dbc.collection('movies').find({}).toArray((err,docs)=>{
			if(err) throw err;
			res.json(docs);
		})
	});
};