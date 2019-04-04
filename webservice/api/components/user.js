var msDB = require('../../connsql/mssql');
var sqlQuery = require('../../connsql/command/sqlquery');

userBaseData = function () {
}

userBaseData.getAllUser = () => {
    let promiseResult = new Promise((resolve, reject) => {
        msDB.dbQuery(sqlQuery.getAllUser, (err, res) => {
            if (err) {
                resolve({ error: 'dbQuery Error:' + JSON.stringify(err), users: null })
            } else {                
                resolve({ error: null, users: res.recordset })
            }
        })
    })
    promiseResult.then((res)=>{  
        console.log(res)     
        return res;
    })
}



module.exports = userBaseData;