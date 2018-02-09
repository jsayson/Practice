let http = require('http');
let fs = require('fs');
// let url = require('url');
// var dt = require('./myFirstModule');

http.createServer((req, res) => {
	fs.readFile('index.html', (err, data) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	res.end();
	});
	// let q = url.parse(req.url, true).query;
	// let txt = ` ${q.year} ${q.month} ${q['name']}`;
}).listen(8080);