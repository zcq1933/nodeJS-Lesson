const events = require("events");
var eventEmitter = events.EventEmitter;

// 绑定事件 ，事件监听
// once表示触发一次事件

eventEmitter.on("hello",function(arg1,arg2) {
    console.log("hello world");
    console.log(arg1,arg2);
})

eventEmiiter.emit("hello");
eventEmitter.emit("hello","node","good");