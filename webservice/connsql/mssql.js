var mssql = require('mssql');
var sqlconfig = require('../conf/config');

var dbTransaction = {}

/**
 * SQL 鏈接池
 */
dbTransaction.msTransaction = (callback) => {
    var connectionSql = new mssql.ConnectionPool(sqlconfig, function (err) {             
            if(err){                
                callback(err,null)
            }else{
                var transaction = new mssql.Transaction(connectionSql);
                callback(mssql, transaction);
            }            
        }
    );
}

/**
 * 事務處理 [插入,更新,刪除]
 */
dbTransaction.beginTransaction=(commands,callback)=>{
    dbTransaction.msTransaction((sql, transaction) => {
        if(sql){
            console.log(' DB Connection Is Lost');
            callback('DB Connection Faile',null);
        }else{
            transaction.begin((err) => {
                if(err){
                    transaction.rollback(callback(err,null))
                }else{
                    var request = new sql.Request(transaction);        
                    request.query(commands,(err,result)=>{            
                        if(err){
                            console.log('request.query error '+ commands);
                            transaction.rollback(callback(err,null));
                        }else{
                            console.log('request.query success ');
                            transaction.commit(callback(null,result))
                        }
                    })
                }           
            }) 
        }               
    })
}

/**
 * 非事務處理[查詢]
 */
dbTransaction.dbQuery=(commands,callback)=>{
    dbTransaction.msTransaction((sql, transaction) => {
        if(sql){
            console.log(' DB Connection Is Lost');
            callback('DB Connection Faile',null);
            return;
        }
        var request = new sql.Request(transaction);
        request.query(commands,(err,result)=>{
            if(err){
                console.log('request.query error')
               callback(err,null) 
            }else{
                console.log('request.query success ');
                callback(null,result)
            }
        })
    }) 
}

dbTransaction.dbQuery('select getdate()',(err,result)=>{
    console.log(err);
    console.log(result);
})

module.exports = dbTransaction;