const events = require("events");
const EventEmitter = events.EventEmitter;

function Dog(dogName) {
    // 执行一遍父构造函数，并且this指向是子构造函数
    EventEmitter.call(this);
    this.dogName = dogName;
    var that = this;
    setTimeout(function() {
        that.emit("bark");
    },3000);
}
// 子构造函数继承父类的prototye
Dog.prototype.__proto__ = EventEmitter.prototype;
var dog = new Dog("123");
dog.on("bark",function() {
    console.log(this.dogName + "can bark");
})