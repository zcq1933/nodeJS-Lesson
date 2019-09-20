function loop() {
    console.log("I will loop forever!");
}

var interval = setInterval(function() {
    loop();
},500);
var timeOut = setTimeout(function() {
    console.log("Game over");
    interval.clear();
},5000);