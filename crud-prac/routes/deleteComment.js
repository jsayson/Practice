const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){
	const dbc = db.db('try');
	app.delete('/api/delete/comment/:id', (req, res)=>{
		console.log(req.params.id);
		const id = req.params.id;
		const details = {'_id' : new ObjectID(id)}
		dbc.collection('comments').deleteOne(details, (err, docs)=>{
			if(err) throw err;
			res.send("Deleted Comment");
		});
	});
};