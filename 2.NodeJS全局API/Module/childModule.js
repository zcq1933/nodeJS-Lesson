/**
 * 自定义模块，自定义js文件，通过require来引入
 * require(相对路径)
 * 被引入模块通过module.exports 来对外公布自己的一些方法或属性
 * 主模块可以访问被引用如模块公布的方法和属性
 * 
 * npm install 模块名字
 * 如果模块名字存在，就会下载下来
 * 
 */

function sayHello() {
    console.log("hello world");
}

function showName() {
    console.log(username);
}

var username = "zhangsan";
module.exports = {
    sayHello:sayHello,
    showName:showName,
    username:username
}