var exec = require("child_process").exec;
var querystring = require("querystring");
var formidable = require("formidable");
var fs = require("fs");

function start(response, postData) {
    console.log("handler 'start' was called");
    
    // exec("find /",
    // {timeout:10000, maxBuffer:20000*1024},
    //  function(error, stdout, stderr){
    //     responseMsg(response, "stdout: " + stdout);
    // });

    var body ='<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData) {
    console.log("handler 'upload' was called");

    var text = querystring.parse(postData).text;
    responseMsg(response, "text: " + text);
}

function show(response, postData){
    fs.readFile("./baidu.png", "binary", function(error, file){
        if (error) {
            responseMsg(response, error);
        } else {
            response.writeHead(200, {"Content-type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}


function responseMsg(response, message) {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write(message);
    response.end();
}

exports.start  = start;
exports.upload = upload;
exports.show   = show;