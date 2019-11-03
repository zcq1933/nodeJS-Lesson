const fs = require("fs");
// try catch 只能捕获同步代码中的异常


try {
    fs.readFile(__fileName,function(err,data) {
        if(err) {
            console.log("error");

        }
        else {
            console.log(data);
        }
    })    
} catch (error) {


    console.log(error.message);

}

process.on("uncaughtException",function() {
    if(err) {
        console.log(err);
    }
})
