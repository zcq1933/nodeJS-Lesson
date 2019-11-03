const cp = require("child_process");

/**
 * 启动子进程
 * 
 * 
 */
var fork1 = cp.fork("childProcess1.js",["javascript"]);
fork1.send("parent");
fork1.stdout.on("close",function(chunk) {
    console.log(chunk.toString());

})


fork1.on("message",function(msg) {
    console.log(msg);
})