// 也就是说module.exports 和 exports 是同一个东西，指向同一块内存地址
let a = 100





console.log('seeModuls-module')
console.log(module);
console.log(exports);
console.log(module.exports);
console.log(exports === module.exports); // true
console.log('seeModuls-module')


exports.a = 200 // module.exports = {a:200}

console.log(module);