const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req,res) {
    var imgPath = path.join(__dirname + "/1.png");
    // console.log(imgPath);
    var imgBuffer = fs.readFileSync(imgPath);
    var img64 = imgBuffer.toString("base64");
    // console.log(img64);

    var imgSrc = "data:image/jpg;base64," + img64;
    var htmlStr = "<!DOCTYPE html><head</head>" + "<body><img src='" + imgSrc + "'/></body> </html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(htmlStr);



}).listen(8081);
