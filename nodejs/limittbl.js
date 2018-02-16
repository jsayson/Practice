const mysql = require('mysql');

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'test',
	database: 'todoapp',
	insecureAuth: false
});

conn.connect((err)=>{
	if(err) throw err;
	console.log('connected');
	//you can use limit to limit the number of queries
	//and you can use offset in returning the first value of the query or the starting point  
	let sql = "SELECT * FROM Persons LIMIT 7 OFFSET 1";
	// or you can use this limit and the offset w/c returns the same value of the sql above
	let sql1 = "SELECT * FROM Persons LIMIT 1, 7";
	conn.query(sql1, (err, res)=>{
		if(err) throw err;
		console.log(res);
	});
})