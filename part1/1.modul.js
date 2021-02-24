let foo = require('./moduljs/foo.js')
// let nofind = require('./moduljs/lll.js') // 加载不存在的目录，报错
let fooValue = foo.printFoo()
console.log(fooValue);
console.log(__filename);
console.log(__dirname);