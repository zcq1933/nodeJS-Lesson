const fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname,"/file.txt");
var filePath1 = path.join(__dirname,"/file1.txt");
console.time("total")
console.time("test1");
var fileContent = fs.readFileSync(filePath);

console.time("test2");
var fileContent1 = fs.readFileSync(filePath1);
console.timeEnd("total")
console.log(fileContent.toString())

console.log(fileContent);

console.log("read end");
