let http = require('http');
let url = require('url');
// var dt = require('./myFirstModule');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	let q = url.parse(req.url, true).query;
	let txt = ` ${q.year} ${q.month} ${q['name']}`;
	res.end(txt);
}).listen(8080);