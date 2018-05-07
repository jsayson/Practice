module.exports = function(app, db){
	const dbc = db.db('try');
	app.get('/api/post/comments/:postId', (req, res)=>{
		dbc.collection('comments').find({postId: req.params.postId}).toArray((err, docs)=>{
			if(err) throw err;
			res.json(docs);
		})
	});
};