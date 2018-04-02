//console.log('hello world');

const http = require('http'); //requiring http library


//@param res handles the result of the request
const server = http.createServer((req, res)=>{
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.end("Hello World");
});


//.listen to the port 8000
server.listen(8000);

console.log("hello World");

