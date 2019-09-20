var username = process.argv[2];
var password = process.argv[3];

if(username!=undefined && password!=undefined) {
    console.log("用户名：" + username + "密码：" + password);
    var buf1 = Buffer.from(username,"utf-8");
    var buf2 = Buffer.from(password,"utf-8");
    var buf64 = buf1.toString("base64") + buf2.toString("base64");
    console.log("base64加密：" + buf64);
}
else {
    console.log(没有输入用户名);
}