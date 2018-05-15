const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){
	const dbc = db.db('try');
	var sess;
	app.get('/api/post/:id', (req, res)=>{
		sess = req.session;
		const urlId = req.params.id;
		const id = {'_id': new ObjectID(urlId) };
		const user_sess = { user : sess.user || 'undefined'};
		dbc.collection('posts').findOne(id, (err, docs)=>{
			if(err) throw err;
			if(sess.user === 'undefined'){
			res.json(docs);
			}
			else{
				const item = [];
				item.push(docs);
				item.push(user_sess);
				console.log(item);
				res.json(item);
			}
		})
	});
