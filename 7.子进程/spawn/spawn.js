const cp = require("child_process");

var childProcess = cp.spawn("node",["childProcess.js"]);
var result = "";

// childProcess.stdin.on("data",function(chunk){
//     result += chunk;
// })

childProcess.stdout.on("data",function() {
    console.log();
})

childProcess.stdin.on("close",function() {
    console.log(result);
})