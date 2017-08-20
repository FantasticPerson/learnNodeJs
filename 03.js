var http = require('http');

var server = http.createServer(function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    var a = 0;
    var arr = ['1','2','3','4'];
    for(var i=0;i<arr.length;i++){
        res.write(arr[i]);
    }
    res.end('end');
});

server.listen(3800,'127.0.0.1');