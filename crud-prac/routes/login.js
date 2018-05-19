module.exports = function(app, db){
	var sess;
	const dbc = db.db('try');
	app.post('/api/login', (req, res)=>{
		sess = req.session;
		const items = { user: req.body.user, pass: req.body.pass };
		console.log(items); 
		console.log('accid '+sess.accId);
		if(String(sess.accId)==='undefined'){
			dbc.collection('accounts').find(items).toArray((err, docs)=>{
				if(err) throw err;
				sess.accId = docs[0]._id;
				sess.user = docs[0].user;
				sess.pass = docs[0].pass;
				console.log(docs);
				console.log(sess);
				res.send('success');
			});
		}
		else{
			console.log(sess);
			res.send('Hello User'+ sess.user);
		}
	});	
};
