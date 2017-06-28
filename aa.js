var html = require("http");
http.create(function(request , response)
{
	response.end('hello world');
}).listen(8080);

console.log('server running at http://127.0.0.1:8080/');
