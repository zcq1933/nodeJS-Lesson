const events = require("events");
var EventEmitter = events.EventEmitter;
function Dog(name,energy) {
    EventEmitter.call(this);
    this.name = name;
    this.energy = energy;
    var that = this;
    var inter = setInterval(function(){
        if(that.energy <= 1) {
            clearInterval(inter);
        }
        that.emit("bark");
        console.log(that.name + "barked!" + "energy:" + (--that.energy));
    },1000)


}
Dog.prototype.__proto__ = EventEmitter.prototype;
var dog3 = new Dog("asdf",4);
dog3.on("bark",function() {
    console.log("bark test");
});
dog3.emit("bark");
module.exports = {
    Dog:Dog
};
