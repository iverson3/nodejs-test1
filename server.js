// http服务器

var http = require('http');
var url  = require('url');

function start(route, handle) {
    http.createServer(function(request, response){
        var pathname = url.parse(request.url).pathname;
        if (pathname != '/favicon.ico') {
            console.log(pathname);  
            route(handle, pathname, response, request);
        }
    }).listen(8888);

    console.log("server has started");
}

exports.start = start



