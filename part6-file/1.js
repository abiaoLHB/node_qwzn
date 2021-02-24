let fs = require('fs')
let data = fs.readFileSync('./index.text')
console.log('data----1')
console.log(data)
console.log('data----2')



console.log('data-----3');
let data2 = fs.readFile('./index.text',(error,data)=>{
    console.log('data-----4');
    console.log(data);
    console.log(data.toString());
})
console.log('data-----5');


fs.writeFile('./message.txt','这是第一行 \r\n 这是第二行',function(err){
    if(err){
        console.log('写入失败');
    }else{
        console.log('写入成功')
    }
})

let newData = new Buffer("你好啊")
fs.writeFile('./buff.txt',newData,(err)=>{
    if(err){
        console.log('buf写入失败');
    }else{
        console.log('buf写入成功');
    }
})

console.log(fs.readdir('./'),function(){
    console.log('读取目录');
});