let http = require('http')
let fs = require('fs')
let server = http.createServer((req,res)=>{
    if(req.url !== '/favicon.icon'){
        req.on('data',(data)=>{
            console.log('服务器收到的数据:'+decodeURIComponent(data));
        })
        req.on('end',()=>{
            console.log('客户端请求数据已全部接收完毕');
        })
    }
    res.end()
}).listen(1338,'127.0.0.1')