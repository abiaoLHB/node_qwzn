// node js中，每一个模块为一个js文件。已模块为单位来划分所有功能。
// 每一个模块中定义的全局变量或者函数的作用范围也被限定在这个模块内。可以使用exprots导出。
exports.printFoo = function () {
    return 'foooooooo'
}