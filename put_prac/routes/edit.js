const ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db){
	const dbc = db.db('try');
	app.get('/:id', (req, res)=>{
		const urlId = req.params.id;
		const id = { '_id' : new ObjectID(urlId)};
		dbc.collection('posts').findOne(id, (err, docs)=>{
			res.render('edit', {'id' : docs['_id'], 'title' : docs.title, 'desc' : docs.description});
		});
	});
	app.put('/:id', (req, res)=>{
		console.log(req.body);
		const urlId = req.body.id;
		const id = { '_id' : new ObjectID(urlId)};
		const item = {title: req.body.title, description: req.body.desc};
		dbc.collection('posts').update(id, item, (error, docs)=>{
			if(error) throw error;
			res.send('success');
		});
		// res.send('hello');
	});
};
