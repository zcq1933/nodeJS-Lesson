var Dog = require("./Dog.js");
var dog1 = new Dog("teddy",5) ;
console.log("test");
function barkFun(){
    console.log(this.name + "barked!!!");
    console.log(this.energy);

}

dog1.on("bark",barkFun);
var intervalidId = setInterval(function() {
    if(dog1.energy >= 0) {
        dog1.emit("bark");
    }
    else {
        intervalidId.unref();
    }
},1000);
dog1.emit("bark");