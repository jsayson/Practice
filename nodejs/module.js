const http = require('http');
const mysql = require('mysql');
const md = require('./crModule.js');

http.createServer((req, res)=>{
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(`The product from the returned module: ${md.myProduct()}`);
	res.end();
}).listen(8080);