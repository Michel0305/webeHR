var msDB = require('../../connsql/mssql');
var sqlQuery = require('../../connsql/command/sqlquery');

userBaseData = function () {
}

userBaseData.getAllUser = () => {
    return new Promise((resolve, reject) => {
        msDB.dbQuery(sqlQuery.getAllUser, (err, res) => {
            if (err) {
                reject({ error: 'dbQuery Error:' + JSON.stringify(err), users: null })
            } else {                
                resolve({ error: null, users: res.recordset })
            }
        })
    })
}

userBaseData.getDepartment=()=>{
    return new Promise((resolve, reject) => {
        msDB.dbQuery(sqlQuery.getDepartment, (err, res) => {
            if (err) {
                reject({ error: 'dbQuery Error:' + JSON.stringify(err), department: null })
            } else {                
                resolve({ error: null, department: res.recordset })
            }
        })
    })
}


module.exports = userBaseData;