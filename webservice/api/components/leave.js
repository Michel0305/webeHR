var msDB = require('../../connsql/mssql');
var sqlQuery = require('../../connsql/command/sqlquery');
var dateutils = require('date-utils');
var moment = require('moment');

leavesBase=function(){}


leavesBase.allData = ()=>{
    return new Promise((resolve, reject) => {
        msDB.dbQuery(sqlQuery.queryLeave.getAllLeave, (err, res) => {
            if (err) {
                reject({ error: 'dbQuery Error:' + JSON.stringify(err), leaves: null })
            } else {                
                resolve({ error: null, leaves: res.recordset })
            }
        })
    })
}

leavesBase.paramsGetData = (params = null)=>{
    if(params == null){
        var paramsQuery =  sqlQuery.queryLeave.getParamsLeave;
    }else{
        var paramsQuery =  sqlQuery.queryLeave.getParamsLeave+params;
    }
    return new Promise((resolve, reject) => {
        msDB.dbQuery(paramsQuery, (err, res) => {
            if (err) {
                reject({ error: 'dbQuery Error:' + JSON.stringify(err), leaves: null })
            } else {                
                resolve({ error: null, leaves: res.recordset })
            }
        })
    })
}

leavesBase.inforLeaves = (infoData)=>{
    getLeaveDate(infoData).then(result=>{
        checkPassLeave(result)
    }).catch(err=>{
        return err;
    })
}

/**
 * 獲取用戶當月請假的次數,天數,小時數
 * @param {*} userid 
 */
function getUserLeaveMonth(userid){
    let paramsQuery = sqlQuery.queryLeave.getUserLeaveMinute+` and  GH='`+userid+`'`
    return new Promise((resolve, reject) => {
        msDB.dbQuery(paramsQuery, (err, res) => {
            if (err) {
                reject({ error: 'dbQuery Error:' + JSON.stringify(err), leavesCnt: null })
            } else {                
                resolve({ error: null, leavesCnt: res.recordset })
            }
        })
    })
}

/**
 * 获取全新保存數據庫數據
 * @param {*} info 
 */
function getLeaveDate(info){
    return new Promise((resolve,reject)=>{
        let promisList =[];
        for (let i = 0; i < info.length; i++) {        
            let proms = new Promise((resolve,reject)=>{
                const el = info[i];
                var stLeave = false
                if(moment(new Date(el.startDate)).format('HH:mm:ss') == "00:00:00" || moment(new Date(el.endDate)).format('HH:mm:ss') == "00:00:00"){
                var stLeave = true
                var starttime = moment(new Date(el.startDate)).format('YYYY/MM/DD HH:mm:ss');
                var timeCount = moment(new Date(el.startDate)).format('YYYY/MM/DD');
                }else{
                var Housrs = ('00'+el.dateCount.split('.')[0]).substring(1);
                var minute = el.dateCount.split('.')[1]>=5?'30':'00';
                var starttime = moment(new Date(el.startDate)).format('YYYY/MM/DD HH:mm:ss');
                var timeCount = moment(new Date(el.startDate)).format('YYYY/MM/DD')+' '+Housrs+':'+minute+':00';
                }
                getUserLeaveMonth(el.accountid).then(reBackData=>{
                    var inData = {
                        accountid:el.accountid,
                        fullname:el.fullname,
                        leaveType:el.leaveType,
                        startDate:moment(new Date(el.startDate)).format('YYYY/MM/DD'),
                        endDate:moment(new Date(el.endDate)).format('YYYY/MM/DD'),
                        startTimes:starttime,           
                        remark:el.remark,
                        agentUsr:el.agentUsr,
                        dateCount:stLeave?el.dateCount:0,
                        timesCount:timeCount,
                        releaveCount:reBackData.leavesCnt
                    }
                    resolve(inData);
                }).catch(err=>{            
                    reject()
                })
            })
            promisList.push(proms);      
        }    
        Promise.all(promisList).then((rs)=>{         
            resolve(rs)
        }).catch(err=>{
            reject(err)
        })
    })       
}

function checkPassLeave(infoData){
    for (let i = 0; i < infoData.length; i++) {
        const el = infoData[i];
        msDB.dbQuery( sqlQuery.queryLeave.checkLeaveDate+`(${el.leaveType},${el.accountid},'${el.startTimes}','${el.timesCount}') as ispass`,(err,res)=>{
            console.log(res)
        })        
       // console.log(el)        
    }   

}




module.exports = leavesBase;