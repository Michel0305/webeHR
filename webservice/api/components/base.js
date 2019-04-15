var msDB = require('../../connsql/mssql');
var sqlQuery = require('../../connsql/command/sqlquery');

var basecomm = function () {
}


basecomm.getSqlData = async function getSqlData (){
    let getDateTime =await new Promise((resolve,reject)=>{
        msDB.dbQuery(sqlQuery.base.getDate,(err,rows)=>{
            if(err) return reject(err);
            return resolve(rows)
        }); 
    }) 
    return getDateTime 
}

module.exports = basecomm;