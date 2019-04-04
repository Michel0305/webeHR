var mssql = require('mssql');
var sqlconfig = require('../conf/config');

var msDB = {}
/**
 * SQL 鏈接池
 */
// if(mssql) mssql.close(); Connection 鏈接需要釋放資源 否則會提示 db 已開啓需關閉錯誤信息
function dbConnection(callback){
    var connection = new mssql.ConnectionPool(sqlconfig, function (err) {
        var transaction = new mssql.Transaction(connection);
        callback(mssql, transaction);
    });
}
/**
 * 事務處理 插入,更新,刪
 */
msDB.dbQuery = (commands, callback) => {
    dbConnection((sql, transaction) => {
        transaction.begin((err) => {
            if (err) {
                transaction.rollback(callback(err, null))
            } else {
                var request = new sql.Request(transaction);
                request.query(commands, (err, result) => {
                    if (err) {
                        console.log('request.query error ' + commands);
                        transaction.rollback(callback(err, null));
                    } else {
                        console.log('request.query success ');
                        transaction.commit(callback(null, result))
                    }
                })
            }
        })
    })
}

module.exports = msDB;