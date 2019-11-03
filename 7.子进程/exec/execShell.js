const cp = require("child_process");
/**
 * 执行shell指令，启动一个子进程
 * 
 * notepad mstsc
 * 
 * 
 */


cp.exec("notepad",function(err,stdout,stderr) {
    console.log(err);
    console.log(stdout);
});

