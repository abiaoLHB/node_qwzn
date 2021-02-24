// let see = require('./moduljs/seeModuls.js')
// console.log(see)//{ a: 200 }

// require导出的内容是module.exports指向的内存内容，并不是exports的。expots只是module。expots的引用


let mode = require('./moduljs/moduleExports.js')
console.log(mode);
console.log(mode.a);
console.log(mode.person);
console.log(mode.sayName());
