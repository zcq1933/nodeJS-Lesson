const fs = require("fs");
const path = require("path");
const process = require("process");

console.log("创建文件夹：");
process.stdin.on("data",function(data) {
    var cmdIn = data.toString();
    var cmdArr = cmd.split(" ");
    switch(cmdArr[0]) {
        case "mkdir":
            fs.mkdirSync(cmdArr[1].slice(0,-2));
            break;
        case "touch":
            // writeFile 创建一个不存在的路径
            var filePath = path.join(__dirname,"/filedir/file.txt");
            fs.writeFileSync(filePath,"hello node");
            break;
        case "delete":
            var filePath = path.join(__dirname,"/filedir/file.txt");
            fs.unlinkSync(filePath);
            break;
        default:
            console.log("something erro");
            break;
    }
});