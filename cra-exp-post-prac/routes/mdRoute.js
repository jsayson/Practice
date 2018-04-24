const ObjectId = require('mongodb').ObjectId;
module.exports = function(app, db){
	const dbc = db.db('try')
	app.get('/api/movies/:id', (req, res)=>{
		let id = req.params['id'];
		// res.send({'id': id});
		dbc.collection('movies').find({'_id': ObjectId(id)}).toArray((err, result)=>{
			res.json(result);
		})
	});
};