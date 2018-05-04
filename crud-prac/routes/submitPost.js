module.exports = function(app, db){
	const dbc = db.db('try');
	app.post('/api/post', (req, res)=>{
		const items = { title: req.body.title, description: req.body.description };
		dbc.collection('posts').insertOne(items, (err, docs)=>{
			if(err) throw err;
			console.log(docs);
		});
	});
};
