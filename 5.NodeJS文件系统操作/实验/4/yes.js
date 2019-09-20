const path = require("path");
const fs = require("fs");

var fileName = process.argv[2];
var pathName = path.join(__dirname,fileName);
if(fs.existsSync(pathName) ){
    var statObj = fs.statSync(pathName);
    if(statObj.isFile()) {
        if(statObj.isFile()) {
            fs.unlinkSync(pathName);
        } 
    }
    else {
        delDir();
    }
}
else {
    console.log("not exists");
    function delDir(pathName) {
        var files = fs.readdirSync(pathName);
        for(var i = 0;i<files.length;i++) {
            pathName = path.join(__dirname,files[i]);
            var statObj = fs.statSync(pathName);
            if(statObj.isFile()) {
                fs.unlinkSync(pathName);

            }
            else if(statObj.isDirectory()) {
                delDir(pathName);
            }
        }
        fs.rmdirSync(pathName);

    }
}
