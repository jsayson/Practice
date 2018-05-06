const ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db){
	const dbc = db.db('try');
	app.delete('/api/post/delete/:id', (req, res)=>{
		const urlId = req.params.id;
		const id = { '_id' : ObjectID(urlId) };
		dbc.collection('posts').deleteOne(id, (err, doc)=>{
			if(err) throw err;
			res.send('Deleted: '+doc);
		})
	});
};