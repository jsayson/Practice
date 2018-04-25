module.exports = function(app, db){
	const dbc = db.db('try');
	app.get('/upload', (req, res)=>{
		res.render('upload', {});
	});	
	app.post('/:upload', (req, res)=>{
		const title =  req.body.title;
		const desc = req.body.description;
		dbc.collection('posts').insertOne({'title': title, 'description': desc}, (err, result)=>{
			if(err) throw err;
			console.log(result);
			res.send('submitted');
		});
	});
};