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
	console.log('Connected to database');	
});
