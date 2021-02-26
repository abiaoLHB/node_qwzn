let http = require('http')
let fs = require('fs')
let server = http.createServer((req, res) => {
    if (req.url !== '/favicon.icon') {
        // req.on('data',(data)=>{
        //     console.log('服务器收到的数据:'+decodeURIComponent(data));
        // })
        // req.on('end',()=>{
        //     console.log('客户端请求数据已全部接收完毕');

        //     // res.writeHead(200,{
        //     //     'Content-Type':'text/plain',
        //     //     'Access-Control-Allow-Origin':'http://localhost'
        //     // })
        //     // res.write("你好，数据已收到")

        // })


        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        })
        let obj = {
            name: 'lhb',
            age: '30',
            address: 'beijing'
        }
        res.write(JSON.stringify(obj)) // 发送数据

    }
    res.end()
}).listen(1340, '127.0.0.1')