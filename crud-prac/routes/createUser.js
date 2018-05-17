module.exports = function(app, db){
	const dbc = db.db('try');
	var sess;
	app.post('/api/create/user', (req, res)=>{
		const item = {user: req.body.user, pass: req.body.pass };
		sess = req.session;
		dbc.collection('accounts').insertOne(item, (err, doc)=>{
			if(err) throw err;
			dbc.collection('accounts').find(item, (error, docu)=>{
				if(error) throw error;
				console.log(docu.cmd.query._id);
				console.log(docu._id)
				sess.accId = docu.cmd.query._id;
				sess.user =	item.user; 
				sess.pass = item.pass; 
				res.send(doc);
			})
		});
	});
}
