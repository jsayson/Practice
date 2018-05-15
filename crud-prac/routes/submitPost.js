module.exports = function(app, db){
	const dbc = db.db('try');
	var sess;
	app.post('/api/post', (req, res)=>{
		sess = req.session;
		const items = { title: req.body.title, description: req.body.description, user: sess.user };
		dbc.collection('posts').insertOne(items, (err, docs)=>{
			if(err) throw err;
			console.log({user: sess.user}, docs);
			res.send('posted');
		});
	});
};
