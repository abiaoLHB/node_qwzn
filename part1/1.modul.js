let foo = require('./moduljs/foo.js')
// let nofind = require('./moduljs/lll.js') // 加载不存在的目录，报错
let fooValue = foo.printFoo()
let fuModul = require('./moduljs/coo.js')
console.log(fooValue);
console.log(__filename);
console.log(__dirname);

const a = require('./moduljs/bar.js')
console.log('a-------');
console.log(a); // 空对象。这里牵扯到commonjs规范问题。
console.log('a-------');

// commonjs规范：nodejs中，每一个文件就是一个模块，牵扯到导出和引入
// module.expotrs : module变量代表当前模块。这个变量是一个对象，有exprots属性
// 他的exports属性就是对外的接口.加载某个模块,其实是加载该模块的module.exports属性

// 为了方便，node为每个模块提供了一个exprots变量，指向module。exports，这等同于在每个
// 模块头部，有这样一行代码 var exports = module。exports
// 推荐优先使用module。exports。因为如果直接将一个变量赋值给exports，就切断了
// module。exprots和 exports之间的联系


fuModul.getName() // coo.js

// common.js定义的模块分为：模块标识(module),模块定义(exports),模块引用(require)

console.log("+++++++++++++++++")
console.log(module.children)
console.log("+++++++++++++++++")