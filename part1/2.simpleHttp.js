let http = require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<head><meta charset="utf-8"></head>')
    res.end('你好\n')
}).listen(1337,'127.0.0.1')
console.log('Server runing at http://127.0.0.1:1337/');