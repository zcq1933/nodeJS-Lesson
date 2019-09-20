/**
 * 
 * 原生模块，跟随弄得安装环境安装
 * 就存在的模块
 * 引入关键字 require("模块");
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req,res) {
    console.log(fs);
    var filePath = path.join(__dirname,"/module1.js")
    res.end("hello world");
}).listen(8080);
