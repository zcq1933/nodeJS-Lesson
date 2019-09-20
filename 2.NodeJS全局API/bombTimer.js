var Bomb = {
    message:"bomb!!",
    explode:function(){
        console.log(this.message);
    }
}

var bomb1 = Bomb;
setTimeout(function(){
    bomb1.explode()
},2000);