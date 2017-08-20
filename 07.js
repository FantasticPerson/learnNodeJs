var http = require('http');//提供http功能

var server = http.createServer(function(req,res){

    //用户的ip
    var ip = req.connection.remoteAddress;

    var a = parseInt(Math.random()*10000000);
    if(a == 6666666){
        console.log('报警:'+ip);
        throw new Error("恭喜"+ip+"同学，撞大运了6666666")
    }
    res.end(a.toString());
});

server.listen(3888,'127.0.0.1');