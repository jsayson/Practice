const mysql = require('mysql');
const http = require('http');

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'test',
	database: 'todoapp',
	port: 3306,
	insecureAuth: false
});

// const c = conn.connect(); 

conn.connect((err)=>{
	if(err) throw err;
	let sql =  'SELECT * FROM Persons WHERE id = 1';
	conn.query(sql, (err, result)=>{
		if(err) throw err;
		console.log(result);
	});
});
/*http.createServer((req, res)=>{
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write( '=== Test' + "\n" );
	let sql =  'SELECT * FROM Persons WHERE id = 1';
	conn.query(sql, (err, result)=>{
		if(err) throw err;
		res.write(result);
	});
	res.write( '=== Test' + "\n" );
	res.end();
	c.end();
}).listen(8080);*/