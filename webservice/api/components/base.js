/**
 * 共用基礎信息
 */
var msDB = require('../../connsql/mssql');
var sqlQuery = require('../../connsql/command/sqlquery');

let basecomm =  ()=> { }

basecomm.getSqlDate = async function getSqlDate (){
    let getDateTime =await new Promise((resolve,reject)=>{
        msDB.dbQuery(sqlQuery.base.getDate,(err,rows)=>{
            if(err) return reject(err);
            return resolve(rows)
        }); 
    })
    return getDateTime
}

basecomm.getLeaveID = async function getLeaveID (){
    let LeaveID = await new Promise((resolve,reject)=>{
        msDB.dbQuery(sqlQuery.queryLeave.getLeaveID,(err,rows)=>{
            if(err) return reject(err);
            return resolve(rows)
        });
    })
    return LeaveID    
}

module.exports = basecomm;