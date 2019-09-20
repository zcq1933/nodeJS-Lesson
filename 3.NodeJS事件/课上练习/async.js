// 程序阻塞 或者同步执行
const fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname,"/file.txt");
var fileContent = fs.readFileSync(filePath);

console.log(fileContent);

console.log("test");