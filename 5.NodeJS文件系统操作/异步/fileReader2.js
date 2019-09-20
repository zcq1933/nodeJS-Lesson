const  fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname,"/file.txt");

//fid 文件描述符（唯一标识文件）
//openSync （文件路径，打开方式）
var fid = fs.openSync(filePath,"r+");

var buf = Buffer.alloc(30);
// 关于这个路径的数据
var len = fs.statSync(filePath).size;

fs.readSync(fid,buf,0,len,0);

console.log(buf.toString());


fs.closeSync(fid);
