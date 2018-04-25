const ObjectId = require('mongodb').ObjectId;
module.exports = function(app, db){
	const dbc = db.db('try')
	app.get('/api/movies/:id', (req, res)=>{
		let id = req.params['id'];
		// res.send({'id': id});
		// console.log('id: '+id);
		dbc.collection('movies').find({'_id': ObjectId(id)}).toArray((err, result)=>{
			res.json(result);
		})
	});
	app.delete('/api/movies/:id', (req, res)=>{
		let id = req.params['id'];
		let details = { '_id': ObjectId(id) }
		console.log(details);
		dbc.collection('movies').remove(details, (err, docs)=>{
			if(err) throw err;
			res.json({'hello': 'world'});
		});
	});
};
