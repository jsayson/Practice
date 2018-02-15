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
	console.log('connected to database');
	let sqlEsc = 'Susan';
	let sql = 'DELETE FROM Persons WHERE firstname='+mysql.escape(sqlEsc);
	conn.query(sql, (err, res)=>{
		if(err) throw err;
		console.log(`Deleted number of rows ${res.affectedRows}`);
	});
});