const ObjectId = require('mongodb').ObjectId;
module.exports = function(app, db){
	const dbc = db.db('try');
	app.get('/:edit', (req, res)=>{
		dbc.collection('posts').find({'_id': new ObjectId(req.query.id)}).toArray((err, docs)=>{
			if(err){
				throw err;
				res.render('index', {});
			}
			else{
				res.render('edit', {'item': docs});
			}
		});
	});
	app.put('/:edit', (req, res)=>{
		console.log(req.params);
		res.send('hi');
	});
};