const http = require("http");
const url = require("url");
const fs = require("fs");


http.createServer(function(req,res) {
    var urlObj = url.parse(req.url);
    if(urlObj.pathname == "/") {
        var fileContent = fs.readFileSync("./postFile.html");
        console.log(fileContent);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(fileContent);    
    }
    else if(urlObj.pathname == "/upload") {
        var strData ="";
        req.on("data",function(chunk) {
            strData += chunk;

        });
        req.on("end",function() {
            console.log(strData);
        })
    }
    



}).listen(8081);
console.log("server is listening8081");