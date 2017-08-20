var http = require('http');//提供http功能
var fs = require('fs');

//开启一个服务器，这是一个异步函数。基本所有函数都是异步的
var server = http.createServer(function(req,res){
    //req request   用户请求
    //res response  服务器响应
    res.setHeader('Content-Type','text/html;charset=utf-8');

    //写一个顶层路由，就是根据用户访问了什么干什么事
    switch(req.url){
        case '/a':
            fs.readFile('./pages/haha.html',function(err,data){
                res.end(data.toString())
            });
            break;
        case '/b':
            fs.readFile('./pages/xixi.html',function(err,data){
                res.end(data.toString())
            });
            break;
        case '/shuaige.mp3':
            fs.readFile('./pages/1.png',function(err,data){
                res.setHeader('Content-Type','image/png');
                res.end(data);
            });
            break;
        case '/ysd.ysd':
            fs.readFile('./pages/css.css',function(err,data){
                res.setHeader('Content-Type','text/css');
                res.end(data);
            });
            break;
        default:
            res.end('对不起，没有这个页面');
            break;
    }
    console.log(req.url);
});

//监听一个端口
server.listen(3800,'127.0.0.1');