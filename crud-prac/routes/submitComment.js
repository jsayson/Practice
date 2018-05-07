module.exports = function(app, db){
	const dbc = db.db('try');
	app.post('/api/submit/comment', (req, res)=>{
		console.log(req.body);
		const items = { postId: req.body.postId, comment: req.body.comment };
		dbc.collection('comments').insertOne(items, (err, docs)=>{
			if(err) throw err;
			res.send('Submitted');
		})
	})
};
