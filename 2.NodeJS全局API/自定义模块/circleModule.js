function circleFun(r) {
    function circumference(){
        return "圆的周长"+2*Math.PI*r;
    }
    function area() {
        return "圆的面积"+Math.PI*r*r;
    }
    return {
        circumference:circumference,
        area:area
    };
}

module.exports = {
    circleFun:circleFun
}