const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){
	const dbc = db.db('try');
	app.get('/api/post/:id', (req, res)=>{
		const urlId = req.params.id;
		const id = {'_id': new ObjectID(urlId) };
		dbc.collection('posts').findOne(id, (err, docs)=>{
			if(err) throw err;
			res.json(docs);
		})
	});
};