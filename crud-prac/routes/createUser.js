module.exports = function(app, db){
	const dbc = db.db('try');
	app.post('/api/create/user', (req, res)=>{
		const item = {user: req.body.user, pass: req.body.pass };
		dbc.collection('usernames').insertOne(item, (err, doc)=>{
			if(err) throw err;
			console.log('inserted new row'+doc.insertedCount);
			res.send(doc)
		});
	});
}
