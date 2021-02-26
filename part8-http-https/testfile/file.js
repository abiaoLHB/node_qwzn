let http = require('http')
let fs = require('fs')

let server = http.createServer((req,res)=>{
    if(req.url !== '/favicon.ico'){
        fs.readFile('../request.log','utf8',(error,data)=>{
            if(error){
                console.log("读文件报错")
            }else{
                let flg = res.write(data)

                res.setTimeout(2000,function(){
                    console.log('相应超时');
                })
                res.end()
            }
        })
    }
}).listen(1341,'localhost')

server.setTimeout(5000,function(){
    console.log('http链接超时');
})