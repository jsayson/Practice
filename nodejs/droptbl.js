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
	let sql = 'DROP TABLE IF EXISTS Persons';
	conn.query(sql, (err, res)=>{
		if(err) throw err;
		console.log(res);
	});
});