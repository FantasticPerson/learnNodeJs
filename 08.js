var http = require('http');//提供http功能
var fs = require('fs');

var server = http.createServer(function(req,res){
    var ip = req.connection.remoteAddress;
    console.log(ip+'用户来了，开始读取text1');
    fs.readFile('./pages/text1.txt',function(err,data1){
        console.log(ip+'用户读取text1完毕。开始读取text2');
        fs.readFile('./pages/text2.txt',function(err,data2){
            console.log(ip+'用户读取text2完毕。');
            res.setHeader('Content-Type','text/html;charset=UTF-8');
            // res.write(data1);
            res.end(data1+data2);
        })
    })
});