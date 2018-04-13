module.exports = function(app, db){
		let dbc = db.db('try');
	app.post('/notes', (req, res)=>{
		//create a note here
		dbc.collection('movies').find({}, (err, results)=>{
			if(err){
				res.send({'error': 'files not found'})
			}
		});	
	});
}