const http = require("http");
const url = require("url");

http.createServer(httpManager).listen(8081);
function httpManager(req,res) {
    var reqObj = url.parse(req.url,true);
    var pathName = reqObj.pathname;
    console.log(pathName);
    switch(pathName) {
        case "/":
            showIndex(res);
            break;
        case "/file":
            showFile();
            break;
        default:
            res.end("error");
            break;
    }
    // console.log(reqObj);
}
        function showIndex(res) {
            var fileList = ["t1.txt","t2.txt"];
            var str = "<ul>";
            for(var i = 0;i<fileList.length;i++) {
                
            }

            str = str +"</ul>";
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(str);

        }
        
        function showFile() {
            res.end("")
        }

