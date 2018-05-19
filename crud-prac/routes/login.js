module.exports = function(app, db){
	app.post('/api/login', (req, res)=>{
		res.send('hello');
	});	
};