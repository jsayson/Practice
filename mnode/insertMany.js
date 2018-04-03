const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/try', (err, db)=>{
	if(err) throw err;
	console.log('Connected');
	let insertVal = [{name: 'one'},{name: 'two'},{name: 'three'}];
	let col = db.db('try');
	col.collection('usernames').insertMany(insertVal, (err, res)=>{
		if(err) throw err;
		console.log('Values inserted: '+ res.affectRows);		
		db.close();	
	});
});
