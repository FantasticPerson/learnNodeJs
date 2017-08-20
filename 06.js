var http = require('http');//提供http功能
var a=0;
//全局变量
var server = http.createServer(function(req,res){
    //用户每访问一次 a都要加1
    a++;
    res.end(a.toString());
});

server.listen(3888,'127.0.0.1');