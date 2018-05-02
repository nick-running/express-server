/**
 * Created by Administrator on 2017/11/22.
 */
var proxy = require('express-http-proxy');
var express = require('express');
var app = express();
app.use(express.static('public'));
//设置跨域访问
// app.use('/api_push', proxy('https://rest-hangzhou.goeasy.io'));
app.use('/api', proxy('http://www.easy-skill.cn'));
// app.use('/api', proxy('http://127.0.0.1:8899'));

var server = app.listen(8866, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('host is '+host);
    console.log('Example app listening at http://%s:%s', host, port);
});
