const mime = require("mime");
const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");
const querystring = require("querystring");
const listData = require("./data/chapterList");
//导入文件模块
// var fs=require("fs");
var server =http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;
    // console.log(pathName+"pathname");
    if(pathName.indexOf("/css") >= 0) {
        let filePath = path.join(__dirname, pathName);
        let fileContent = fs.readFileSync(filePath);
        res.writeHead(200,{"Content-Type":"text/css"});
        res.end(fileContent);
    }
    else if(pathName.indexOf("/images")>=0) {
        let filePath = path.join(__dirname,pathName) ;
        let fileContent = fs.readFileSync(filePath);
        res.writeHead(200,{"Content-Type":"image/png"});
        res.end(fileContent);
    }
    else if(pathName.indexOf("/js")>=0) {
        let filePath = path.join(__dirname,pathName);
        let fileContent = fs.readFileSync(filePath);
        res.writeHead(200,{"Content-Type":"application/x-javascript"});
        res.end(fileContent);
    }
    else if(pathName.indexOf("/login_bg")>=0) {
        let filePath = path.join(__dirname,pathName);
        let fileContent = fs.readFileSync(filePath);
        res.writeHead(200,{"Content-Type":"image/jpg"});
        res.end(fileContent);
    }
    else if(pathName.indexOf("/bg")>=0) {
        let filePath = path.join(__dirname,pathName);
        let fileContent = fs.readFileSync(filePath);
        res.writeHead(200,{"Content-Type":"image/jpg"});
        res.end(fileContent);
    }
    // console.log(listData);

    switch(pathName) {
        case '/':
            // console.log(listData);
        case '/list':
            res.setHeader("Content-Type","text/html;charset='utf-8'");
            fs.readFile("./chapterList.html",function(err,data) {
                if(err) {
                    console.log(err);
                }
                else {
                    res.end(data);
                }
            });
            break;
        case '/login':
                var body = '';
                res.setHeader("Content-Type","text/html;charset='utf-8");
                if(req.method == "POST") {
                    console.log("testing");
                    req.on("data",(chunk) => {
                        body += chunk;
                        // console.log(body);
                        if(body === "admin123456") {
                            res.write("success");
                            // res.end();
                        }
                        else {
                            res.write("false");
                            // res.end();
                        }
                    })
                    req.on("end",function() {
                        // res.write("成功");
                        res.end();
                    })
                }
                fs.readFile("./login.html",function(err,data) {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        res.end(data);
                    }
                });
                
                break;

        case '/listmanager':
                res.setHeader("Content-Type","text/html");
                fs.readFile("./list.html",function(err,data) {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        res.end(data);
                    }
                });
                break;
        case '/addchapter':
            res.setHeader("Content-Type","text/html");
            if(req.method == "POST") {
                var newObj = {};
                console.log("add");
                let addbody = '';
                req.on("data",(chunk)=> {
                    addbody += chunk;
                    console.log(chunk+"chunk");
                    res.write("传入成功");
                });
    
                req.on("end",function() {
                    res.end();
                })
                

            }
            fs.readFile("./addChapter.html",function(err,data) {
                if(err) {
                    console.log(err);
                }
                else {
                    // console.log("res");
                    res.end(data);
                }
            });

            break;
        case '/detail':
            res.setHeader("Content-Type","text/html");
            fs.readFile("./chapter.html",function(err,data){
                if(err) {
                    console.log(err);
                }
                else {
                    res.end(data);
                }
            })
            break;
        case '/getDetail':
            var urlObj = url.parse(req.url,true);
            let qs = querystring.parse((urlObj.search).slice(1));
            // let data = urlObj.search.slice(1);
            // console.log(listData[qs.chapterId]);
            // res.end(listData[qs.chapterId].toString());

            let data = JSON.stringify(listData[qs.chapterId]);
            // console.log(data);
            res.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});
            // res.end(data);
            // res.end();
            res.write(data);
            res.end();
            break;
        default:
            break;
    }
}).listen(8083);