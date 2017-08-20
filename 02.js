var http = require('http');//提供http功能

//开启一个服务器，这是一个异步函数。基本所有函数都是异步的
var server = http.createServer(function(req,res){
    //req request   用户请求
    //res response  服务器响应
    console.log('创建服务器成功');
    res.end('hello');

});

//监听一个端口
server.listen(3800,'127.0.0.1');