const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/try', (err, db)=>{
	if(err) throw err;
	console.log('connected to database');
	let specific = 'one';
	let col = db.db('try');
	col.collection('usernames').find({'name': specific}).toArray((err, res)=>{
		if(err) throw err;
		res.forEach((index, row)=>{
			console.log(index+' '+row['_id']+' '+row.name);
		});
	db.close();	
	});
});
