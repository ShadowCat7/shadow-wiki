var http = require('http');
var nodeStatic = require('node-static');

var file = new (nodeStatic.Server)('./public', { cache: 0 });

var server = http.createServer(function (request, response) {
	request.on('end', function () {
		file.serve(request, response, function (err, result) { });
	});
});

server.listen(7778);