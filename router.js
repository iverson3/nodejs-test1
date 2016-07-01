// 路由

function route(handle, pathname, response, request) {
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        response.writeHead(404, {"Content-type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;