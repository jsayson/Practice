const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){
	//if(err) throw err;
	let dbc = db.db('try');
	app.get('/', (req, res)=>{
		dbc.collection('movies').find({}).toArray((err, results)=>{
			if(err){
				console.log({'Message': 'Item not found'});
			}
			else{
				results.forEach((docs)=>{
				console.log(docs);
				res.send(docs);
				});
			}
		});
	});
	app.use((req, res)=>{
		res.sendStatus(404);
	});
}