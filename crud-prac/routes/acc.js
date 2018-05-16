module.exports = function(app, db){
	var sess;
	const dbc = db.db('try');
	app.get('/acc', (req, res)=>{
		sess = req.session;
		console.log(sess.Session);
		const user = { user: sess.user, pass: sess.pass };
		dbc.collection('accounts').find(user, (err, doc)=>{
			res.send({id: doc._id, user: doc.user || 'undefined' });
		})
	});
	app.get('/api/check/user', (req, res)=>{
		sess = req.session;
		dbc.collection('accounts').find({}).toArray((err, doc)=>{
			if(err) throw err;
			res.json(doc);
		})
	})
}
