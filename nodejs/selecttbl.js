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
	console.log('Connected!');
	//we can also use escape query variables 
	let fn = 'light';
	let ln = 'valley';
	//or you can use escape method by using '?' as a placeholder for the value in the selected query
	//and you can use multiple placeholders
	//+mysql.escape(val);
	let sql = "SELECT * FROM Persons WHERE firstname=? or lastname=? ORDER BY firstname asc";
	conn.query(sql, [fn, ln], (err, res)=>{
		if(err) throw err;
		let totalId = 0; 
		for(val of res){
			console.log(val);
			totalId += parseInt(val['id']);
		}
		console.log(totalId || 0);
		// console.log(res);
	});
});