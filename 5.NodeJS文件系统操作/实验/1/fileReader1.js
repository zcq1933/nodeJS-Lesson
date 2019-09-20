const http = require("http");
const process = require("process");
const path = require("path");
const fs = require("fs");

var argv = process.argv[2];
console.log(argv);
var filePath = path.join(__dirname,argv);
console.log(filePath);
var defaultPath = path.join(__dirname,"/fileReader1.js")
http.createServer(function(req,res) {
    if(fs.existsSync(filePath)) {
        // console.log(fs.readFile(filePath).toString());

        var fileContent = fs.readFileSync(filePath);
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        var conntent1 = fileContent.toString();

    }
    else {
        var fileContent = fs.readFileSync(defaultPath);
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

        res.end(fileContent.toString());
    }

}).listen(8081);
console.log("server is listening");

