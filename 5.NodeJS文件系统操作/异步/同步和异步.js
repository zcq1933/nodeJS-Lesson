// readFileSync 是同步事件

const fs = require("fs");
const path = require("path");
var filePath = path.join(__diename,"/file.txt");


fs.readFile(filePath,function(err,data) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(data.toString());
    }
})

console.log("read end");
