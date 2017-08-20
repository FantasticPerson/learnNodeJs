var http = require('http');//提供http功能
var fs = require('fs');//可以读取写入硬盘上的文件

//开启一个服务器，这是一个异步函数。基本所有函数都是异步的
var server = http.createServer(function(req,res){
    //req request   用户请求
    //res response  服务器响应
    fs.readFile('./pages/haha.html',function(err,data){
        res.end(data.toString())
    });
});

//监听一个端口
server.listen(3800,'127.0.0.1');