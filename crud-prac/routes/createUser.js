module.exports = function(app, db){
	app.post('/api/create/user', (req, res)=>{
		res.send('Hello');
	});
}
