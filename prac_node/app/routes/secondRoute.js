module.exports = function(app, db){
	app.get('/movies', (req, res)=>{
		const dbc = db.db('try');
		dbc.collection('movies').find({}).toArray((err, results)=>{
			console.log(results);
			res.json(results);

			//@not working res.send(res.json(results));
		});
	});
};