const ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db){
	const dbc = db.db('try');
	var sess;
	app.get('/api/post/comments/:postId', (req, res)=>{
		sess = req.session;
		let comments = [];
		let full = [];
		var items = {};
		dbc.collection('comments').find({postId: req.params.postId}).toArray((err, docs)=>{
			if(err) throw err;
			docs.forEach((val)=>{
				items['_id'] = val._id;
				items['postId']= val.postId;
				items['comment'] = val.comment;
				items['acc'] = [];
				let user = {'_id': ObjectID(val.userId) };
				let userId = val.userId;
				dbc.collection('accounts').find().toArray((error, docu)=>{
					for(let i=0; i<docu.length;i++){
						let accId = docu[i]._id;
						if(accId.toString()==userId.toString()){
							comments.push({'_id': val._id, 'postId': val.postId, 'comment': val.comment, 'user': docu[i].user, 'userId': val.userId});
						}
					}
					Promise.all(comments).then(value=>res.send(value));
					})
				});				
			})	
		})
	});
};
