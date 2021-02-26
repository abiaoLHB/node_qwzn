let http = require('http')
let fs = require('fs')
// 回调函数：当收到客户端请求时所需执行的处理.如果不写回调函数，可以监听server.request事件
// server:被创建的服务器对象
let server = http.createServer((req, res) => {
    // req:代表客户端的请求
    // res:代表服务器端相应对象
    console.log('pp');
    if (req.url !== '/favicon.icon') {
        var out = fs.createWriteStream('./request.log')
        out.write("客户端请求所用的方法：" + req.method + '\r\n')
        out.write("客户端请求所用的url字符串：" + req.urll + '\r\n')
        out.write("客户端请求所用的头对象：" + JSON.stringify(req.headers) + '\r\n')
        out.write("客户端请求所用的HTTP版本：" + req.httpVersion + '\r\n')
        out.write("客户端请求所用的req：" +  String(req) + '\r\n')

        console.log("请求对象")
        console.log(req);
        console.log("请求对象")
    }
    res.end()
})
    .listen(1339, '127.0.0.1', function () {
        console.log("开始监听1")
        setTimeout(() => {
            // server.close()
        }, 3000)
    })

// socket:服务器端用于监听客户端请求的socket端口对象
server.on('connection', (socket) => {
    console.log("建立了链接")
})

// server.on('request',(req,res)=>{
//     // 等同于createServer中的回调函数
// })

// 需要制定该服务器要监听的地址和端口
// server.listen(1339,'127.0.0.1',function(){
//     console.log("开始监听2")
// })


server.on('close', () => {
    console.log("服务器关闭了q");
})

server.on('error', (e) => {
    if (e.code == 'EADDRINUSE') {
        console.log("端口被占用")
    }
})

// server.timeout = 1000 //ms
// server.on('timeout', function (socket) {
//     console.log('超时了')
// })

// 写法等同于下面
server.setTimeout(2 * 60 * 1000, function () {
    console.log('又超时了');
});