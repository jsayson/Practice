const ObjectId = require('mongodb').ObjectId;
module.exports = function(app, db){
	const dbc = db.db('try');
	app.get('/:edit', (req, res)=>{
		// res.send(req.query.id);
		const details = {'_id': ObjectId(req.query.id) };
		dbc.collection('posts').find(details).toArray((err, docs)=>{
			if(err){
				res.sendStatus(404);
			}
			else{
				res.render('edit', {'item': docs});
			}
		});
		// res.send(details);
	});
	app.put('/:edit', (req, res)=>{
		const details = {'_id': ObjectId(req.query.id) };
		const note = { $set: {'title': req.query.title, 'desc': req.query.desc} };
		dbc.collection('posts').updateOne(details, note, (err, result)=>{
			if (err) {
		          console.log({'error':'An error has occurred'});
		      } else {
		          console.log(note);
		      } 
		});
	});
};
