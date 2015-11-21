var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'content=Type': 'text/plain'});
	res.end('fuck you\n');
}).listen(8000, '127.0.0.1');

console.log('server running at http://127.0.0.1:8000/');
