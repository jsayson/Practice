//The use of exports is to make the returned value accessible outside the scope

exports.myProduct = (callback) => {
const mysql = require('mysql');

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'test',
	database: 'todoapp',
	insecureAuth: false
});

callback = conn.connect((err)=>{
	if(err) throw err;
	console.log("connected");
	let val = 1;
	let sql = 'SELECT * FROM Persons WHERE id = ?';
	conn.query(sql, [val], (err, res)=>{
		if(err) throw err;
		return res;
	});
});
	return callback;
};