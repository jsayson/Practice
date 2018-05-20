module.exports = function(app, db){
	var sess;
	const dbc = db.db('try');
	app.post('/api/login', (req, res)=>{
		sess = req.session;
		const items = { user: req.body.user, pass: req.body.pass };
		console.log(items); 
		if(String(sess.accId)==='undefined'){
			dbc.collection('accounts').find({'user': req.body.user}).toArray((err, docs)=>{
				if(err) throw err;
				if(req.body.pass === docs[0].pass && req.body.user === docs[0].user){
					sess.accId = docs[0]._id;
					sess.user = docs[0].user;
					sess.pass = docs[0].pass;
					console.log('accid '+sess.accId);
					res.send({'Message' : 'Success', 'Status': true});
				}
				else{
					res.send({'Message' : 'Wrong password', 'Status': false});	
				}
			});
		}
		else{
			console.log(sess);
			res.send('Hello User'+ sess.user);
		}
	});	
};
