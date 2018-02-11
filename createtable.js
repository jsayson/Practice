const mysql = require ('mysql');

conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'todoapp'
});

conn.createConnection((err)=>{
	if(err) throw err;
	console.log('connected');
	let sql = 'CREATE TABLE person(id int, lastName varchar(255), firstName varchar(255))';
	conn.query(sql, (error, res)=>{
		if(error) throw error;
		console.log('Table created');
	});
});