const http = require("http");
const fs = require("fs");
const path = require("path");
var dataPath = path.join(__dirname,"/data.txt");
http.createServer(function(req,res) {
    var readStream = fs.createReadStream(dataPath);
    readStream.pipe(res);
    // res.end();
}).listen(8000);
console.log("listening");