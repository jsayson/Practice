const ObjectId = require('mongodb').ObjectId;

module.exports = function(app, db){
	let dbc = db.db('try');
	app.get('/:id', (req, res)=>{

		dbc.collection('posts').findOne({}, (err, docs)=>{
		res.send(docs);
		});
	});
	app.put('/:id', (req, res)=>{
		const id = { '_id': new ObjectId(req.params.id)};
		const note = {'title': req.body.title, 'description': req.body.desc};
		console.log(note);
		dbc.collection('posts').update(id, note, (err, docs)=>{
			if(err) throw err;
			// console.log(docs);
			res.send(docs);
		});
	});
};