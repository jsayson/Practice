module.exports = function(app, db){
	const dbc = db.db('try');
	app.get('/api/posts', (req, res)=>{
		dbc.collection('posts').find({}).toArray((err, docs)=>{
			if(err) throw err;
			res.json(docs);
		})
	});
};