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
	let sql = 'CREATE TABLE Persons(id int, firstname varchar(255), lastname varchar(255))';
	conn.query(sql, (res)=>{
		if(err) throw err;
		console.log('Table created!');
	});
});