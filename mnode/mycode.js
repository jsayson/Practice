const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/try', (err, db)=>{
	if(err) throw err;
	console.log('Connected');
	let dbc = db.db('try');
	//console.log(dbc);
	dbc.collection('usernames').find({}).toArray((err, res)=>{
		res.forEach((doc)=>{
			console.log(doc);		
		});		
		db.close();	
	});				
}); 
