module.exports = function(app){
	app.get('/greet', (req, res)=>{
		console.log('Well done here, mate!');
		let greetings = [{greeting: 'Hello there mate!'}, {greeting: 'Ohaiyo!'}, {greeting: 'Hola! Amigo'}]
		res.send(greetings);
	});
}