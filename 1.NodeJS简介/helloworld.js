const http = require("http");
var server = http.createServer(function(req,res) {
    res.write("hello world");
    res.end();
});

server.listen(8081);
console.log("listening");