const http = require("http");
const path = require("path");
const fs = require("fs");

var server = http.createServer(function(req,res) {
    var htmlPath = path.join(__dirname,"/views/index.html");
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf-8");
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    console.log(htmlPath);
    res.end();
})

server.listen(8080);