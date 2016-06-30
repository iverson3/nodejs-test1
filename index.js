var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"]      = requestHandlers.start
handle["/start"] = requestHandlers.start
handle["/upload"]= requestHandlers.upload
handle["/show"]= requestHandlers.show

// 将路由函数以参数的形式注入到服务器模块中
server.start(router.route, handle);