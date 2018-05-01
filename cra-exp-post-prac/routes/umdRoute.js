const ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db){
	const dbc = db.db('try');
	app.get('/edit/:id', (req, res)=>{
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};
		dbc.collection('movies').findOne(details, (err, docs)=>{
			if(err) throw err;
			res.json(docs);
		});
	})
	app.put('/edit/:id', (req, res)=>{
		const itemId = req.body.id;
		const itemDetails = { $set : {
			title: req.body.title,
			rating: {
				r_imdb: req.body.r_imdb,
				r_tomato: req.body.r_tomato,
			},
			desc: req.body.description
		} }; 
		dbc.collection('movies').updateOne(itemId, itemDetails, (err, docs)=>{
			if(err) throw err;
			res.send({'Updated': docs});
		})
	})
};