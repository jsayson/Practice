const express = require('express');
const app = express();

app.get('/', (req, res)=>{
	res.send('Hello World');
});

app.use((req, res)=>{
	res.sendStatus(404);
});

const server = app.listen(8000, ()=>{
	const port = server.address().port;
	console.log('Express is connected');
});
