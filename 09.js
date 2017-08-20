var http = require('http');//提供http功能
var fs = require('fs');

var server = http.createServer(function(req,res){
    var ip = req.connection.remoteAddress;
    console.log(ip+'用户来了，开始重度计算');
    var zonggeshu = 0;
    for(var i=0;i<=10000;i++){
        for(var j=0;j<=i;j++){
            if(i%j == 0){
                count++;
            }
        }
        if(count == 2){
            zonggeshu++;
        }
    }
    console.log(ip+"用户计算完了");
    res.setHeader('Content-Type','text/html;charset=UTF-8');
    res.end("一百万之内的质数的个数是:"+zonggeshu.toString());
});