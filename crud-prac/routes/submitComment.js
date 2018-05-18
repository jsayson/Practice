const ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db){
	const dbc = db.db('try');
	var sess;
	app.post('/api/submit/comment', (req, res)=>{
		sess = req.session;
		dbc.collection('accounts').findOne({'_id' : new ObjectID(sess.accId)}, (error,docu)=>{
			if(error) throw error;
			const items = { postId: req.body.postId, comment: req.body.comment, userId: docu._id};
			dbc.collection('comments').insertOne(items, (err, docs)=>{
				if(err) throw err;
				res.send('Submitted');
			});
		});			
	})
};
