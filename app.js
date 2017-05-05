var express = require('express');
var fs = require('fs');
var app = express();

//public为静态资源文件地址
app.use(express.static('public'));

app.get('/', function (req, res) {
    fs.readFile('./client/index.html',function(error,data){
        if(error) {
            //错误，发生错误信息
            res.send('500 - Server Error');
        }else{
            //成功，发生文件，并设置类型为‘text/html’
            res.set('Content-Type', 'text/html');
            res.send(data);
        }
    });
});

var server = app.listen(5277, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
