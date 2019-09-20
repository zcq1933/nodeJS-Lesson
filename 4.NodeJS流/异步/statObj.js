const  fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname,"/file.txt");
/**
 * stat.isFile()判断当前路径是否为文件
 * stat.isDirectory() 判断当前路径是否为文件夹
 * 
 */
var statObj = fs.statSync(filePath);
console.log(statObj);
