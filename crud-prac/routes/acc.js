module.exports = function(app, db){
	var sess;
	app.get('/acc', (req, res)=>{
		sess = req.session;
		console.log(sess.Session);
		res.send({user: sess.user});
	});
}