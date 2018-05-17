module.exports = function(app, db){
	const dbc = db.db('try');
	var sess;
	app.get('/api/posts', (req, res)=>{
		sess = req.session;
		console.log(sess);
		dbc.collection('posts').find({}).toArray((err, docs)=>{
			if(err) throw err;
			res.json(docs);
		})
	});
};
