module.exports = function(app, db){
	const dbc = db.db('try');
	var sess;
	app.post('/api/create/user', (req, res)=>{
		const item = {user: req.body.user, pass: req.body.pass };
		sess = req.session;
		sess.user =	item.user; 
		sess.pass = item.pass; 
		console.log(item);
		dbc.collection('accounts').insertOne(item, (err, doc)=>{
			if(err) throw err;
			console.log('inserted new row'+doc.insertedCount);
			res.send(doc);
		});
	});
}
