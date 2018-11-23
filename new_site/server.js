const app = require('express')();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
 
let port = process.env.PORT || 8000;

require('./routes')(app);

const server = app.listen(port, ()=>{
	port = server.address().port;
	console.log('We are live on port: '+ port);
});