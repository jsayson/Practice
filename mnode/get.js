const express = require('express');
const app = express();
const engines = require('consolidate');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname+'/sample');

/*MongoClient.connect('mongodb://localhost/try',(err, db)=>{
	if(err) throw err;
	console.log('Connected to database');

	app.send
});*/

/*function errorHandle(err, req, res, next){
    console.error(err.message);
    console.error(err.stack);
    res.status(500);
}*/

app.get('/:name', (req, res)=>{
	let name = req.params.name;
	let firstVal = req.query.firstVal || 'undefined';
	let secondVal = req.query.secondVal || 'undefined';
	res.render('testGet', {name: name, getFirst: firstVal, getSec: secondVal});
});

app.use((err, req, res, next)=>{
    console.error(err.message);
    console.error(err.stack);
    res.status(500);});

var server = app.listen(3000, ()=>{
	var port = server.address().port;
	console.log(server.address());
});
