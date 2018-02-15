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
	console.log("connected");
	let sql1 = 'SELECT * FROM Persons';
	conn.query(sql1, (err, res, rows)=>{
		if(err) throw err;
		console.log('TABLE SELECTED');
		console.log(res[0]);
		for(ind in res){
			console.log(res[ind]);
			console.log(ind);
			let sql2 = "UPDATE Persons SET id="+ind;
			conn.query(sql2, (err, res)=>{
				if(err) throw err;
				console.log('updated');
			});
		}
	});
});