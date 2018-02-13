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
	let sql = "INSERT INTO Persons (id, firstname, lastname) VALUES ?";
	let values = [[2,'John','Highway'],[3,'Peter','Lowstreet'],[4,'Amy','Apple'],[5,'Michael','Valley'],[6,'Sandy','Ocean'],[7,'Betty','Green'],[8,'Richard','Sky'],[9,'Susan','One'],[10,'Vicky','Garden'],[11,'Ben','Park']]
	//inserting more than one values
	conn.query(sql, [values], (err,res)=>{
		if(err) throw err;
		console.log(res);
		console.log([values]);
		console.log('Numbers of record inserted: ' + res.affectedRows);
	});
});