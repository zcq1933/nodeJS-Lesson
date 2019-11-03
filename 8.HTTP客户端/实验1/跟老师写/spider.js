const http = require("http");
const fs = require("fs");
const url = require("url");
const https = require("https");
const cheerio = requie("cheerio");


http.createServer(function(req,res) {
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName == "/") {
        var fileContent = fs.readFileSync("index.html");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent);
        res.end();    

    }
    else if(pathName === "/getList") {
        https.get("https://maoyan.com/films",function(resObj) {
            var result = "";
            resObj.on("data",function(chunk) {
                result += chunk;
            })
            resObj.on("end",function() {
                
                var movieList = [];
                var $ = cheerio.load(result);
                $(".moive-item-title a").each(function() {
                    var movie = {};
                    movie.
                })
            })
        })

    }


}).listen(8081);
console.log("listening");