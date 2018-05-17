const ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db){
	var sess;
	const dbc = db.db('try');
	app.get('/acc', (req, res)=>{
		sess = req.session;
		const user = { id: ObjectID(sess.accId), user: sess.user, pass: sess.pass };
		dbc.collection('accounts').find(user, (err, doc)=>{
			if(err) throw err;
			res.send({ id: sess.accId, user: sess.user || 'undefined' });
		})
	});
	app.get('/api/check/user', (req, res)=>{
		sess = req.session;
		dbc.collection('accounts').find().toArray((err, doc)=>{
			if(err) throw err;
			res.json(doc);
		})
	})
}
