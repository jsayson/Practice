module.exports = function(app, db){
	const dbc = db.db('try');
	app.get('/', (req, res)=>{
		dbc.collection('posts').find({}).toArray((err, results)=>{
			// results.forEach((docs, index)=>{
			// 	// res.render('index', {docu: docs});

			// })
			res.json(results);
		});
	});
}