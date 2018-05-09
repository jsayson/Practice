const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){
	const dbc = db.db('try');
	app.put('/api/update/comment/:id', (req, res)=>{
		console.log(req.body);
		const urlId = req.params.id;
		const id = {'_id' : new ObjectID(urlId) || new ObjectID(req.body.id) };
		const detail = { postId: req.body.postId, comment : req.body.comment };
		dbc.collection('comments').update(id, detail, (err, doc)=>{
			if(err) throw err;
			res.send('Updated' + doc);
		});
	});
};