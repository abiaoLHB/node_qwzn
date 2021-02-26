let mongo = require('mongodb')
var host = "localhost"
// var port = mongo.Connection.DEFAULT_PORT
var port = '27017'
var server = new mongo.Server(host, port, { auto_reconnect: true })
var db = new mongo.Db('node-mongo-examples', server, { safe: true })

console.log('mongodb');
// console.log(mongo);
console.log('mongodb');

db.open(function (err, db) {
    if (err) {
        throw err
    } else {
        console.log("数据库建立成功")
        db.close()
    }
})

db.on('close', function (err, db) {
    if (err) {
        throw err
    } else {
        console.log("数据库关闭成功")
        db.close()
    }

})