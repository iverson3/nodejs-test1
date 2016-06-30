// http服务器

var http = require('http');
var url  = require('url');

function start(route, handle) {
    http.createServer(function(request, response){
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        if (pathname != '/favicon.ico') {
            console.log(pathname);  
            request.setEncoding("utf8");
            request.addListener("data", function(postDataChunk){
                postData += postDataChunk;
                console.log(postDataChunk);
            });

            request.addListener("end", function(){
                route(handle, pathname, response, postData);
            });
        }
    }).listen(8888);

    console.log("server has started");
}

exports.start = start



