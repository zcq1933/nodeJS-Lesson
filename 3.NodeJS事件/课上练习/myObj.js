const util = require("util");

function Parent(name) {
    this.name = name;


}

Parent.prototype.show = function() {
    console.log(this.name);

}

function Child() {

}

util.inherits(Child,Parent);

/**
 * 继承方法
 * 1， Parents.call(this)
 * 2,Child extends Parent
 * 3,util.inherits(Child,Parent);
 */