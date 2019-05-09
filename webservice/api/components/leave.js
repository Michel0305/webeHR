var msDB = require('../../connsql/mssql');
var sqlQuery = require('../../connsql/command/sqlquery');
var dateutils = require('date-utils');
var moment = require('moment');
var basecomm = require('./base');
var conf = require('../../conf/config');

leavesBase = () => { }

/**
 * 獲取用戶當月請假的次數,天數,小時數
 * @param {*} userid 
 */
getUserLeaveMonth = (userid) => {
    let paramsQuery = sqlQuery.queryLeave.getUserLeaveMinute + ` and  GH='` + userid + `'`
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
getLeaveDate = (info) => {
    return new Promise((resolve, reject) => {
        let promisList = [];
        for (let i = 0; i < info.length; i++) {
            let proms = new Promise((resolve, reject) => {
                const el = info[i];
                var stLeave = false
                if (moment(new Date(el.startDate)).format('HH:mm:ss') == "00:00:00" || moment(new Date(el.endDate)).format('HH:mm:ss') == "00:00:00") {
                    var stLeave = true
                    var starttime = moment(new Date(el.startDate)).format('YYYY/MM/DD HH:mm:ss');
                    var timeCount = moment(new Date(el.startDate)).format('YYYY/MM/DD');
                } else {
                    var Housrs = ('00' + el.dateCount.split('.')[0]).substring(1);
                    var minute = el.dateCount.split('.')[1] >= 5 ? '30' : '00';
                    var starttime = moment(new Date(el.startDate)).format('YYYY/MM/DD HH:mm:ss');
                    var timeCount = moment(new Date(el.startDate)).format('YYYY/MM/DD') + ' ' + Housrs + ':' + minute + ':00';
                }
                getUserLeaveMonth(el.accountid).then(reBackData => {
                    var inData = {
                        accountid: el.accountid,
                        fullname: el.fullname,
                        leaveType: el.leaveType,
                        startDate: moment(new Date(el.startDate)).format('YYYY/MM/DD'),
                        endDate: moment(new Date(el.endDate)).format('YYYY/MM/DD'),
                        startTimes: starttime,
                        remark: el.remark,
                        agentUsr: el.agentUsr,
                        dateCount: stLeave ? el.dateCount : 0,
                        timesCount: timeCount,
                        releaveCount: reBackData.leavesCnt,
                        opid: el.opid,
                        autoid: el.autoid
                    }
                    resolve(inData);
                }).catch(err => {
                    reject()
                })
            })
            promisList.push(proms);
        }
        Promise.all(promisList).then((rs) => {
            resolve(rs)
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * 驗證請假單可用性
 * @param {*} infoData 
 */
checkPassLeave = (infoData) => {
    return new Promise((resolve, reject) => {
        const el = infoData[0];
        msDB.dbQuery(sqlQuery.queryLeave.checkLeaveDate + `(${el.leaveType},${el.accountid},'${el.startTimes}','${el.timesCount}','${el.agentUsr}','${el.autoid}') as ispass`, (err, res) => {
            if (err) {
                reject({ error: true, msg: "CheckPassLeave Error" })
            } else {
                let userLeave = res.recordset[0]
                userLeave.accountid = infoData[0].accountid;
                userLeave.fullname = infoData[0].fullname;
                userLeave.leaveType = infoData[0].leaveType;
                userLeave.startDate = infoData[0].startDate;
                userLeave.endDate = infoData[0].endDate;
                userLeave.startTimes = infoData[0].startTimes;
                userLeave.remark = infoData[0].remark;
                userLeave.agentUsr = infoData[0].agentUsr;
                userLeave.dateCount = infoData[0].dateCount;
                userLeave.timesCount = infoData[0].timesCount;
                userLeave.releaveCount = infoData[0].releaveCount;
                userLeave.opid = infoData[0].opid;
                userLeave.autoid = infoData[0].autoid;
                resolve(userLeave) // 範圍驗證結果 0 假日日期重合  1 假期日期驗證通過  2 假日日期無年休  3 代理人請假日期重合
            }
        })
    })
}

/**
 * 獲取所以請假單據
 */
leavesBase.allData = () => {
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

/**
 * 依據條件查詢請假單
 */
leavesBase.paramsGetData = (params = null) => {
    if (params == null) {
        var paramsQuery = sqlQuery.queryLeave.getParamsLeave;
    } else {
        var paramsQuery = sqlQuery.queryLeave.getParamsLeave + params;
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

/**
 * 確認請假是否有效
 * 
 */
leavesBase.checkLeavesStatus = (infoData) => {
    async function checkStatus() {
        return getLeaveDate(infoData).then((result) => {
            console.log(result);
            return checkPassLeave(result)
        })
    }
    return checkStatus()
}

/**
 * 保存請假單
 */
leavesBase.insertLeave = (leaveData) => {
    async function tmpSqlDate() {
        let dates = await basecomm.getSqlDate();
        let leaveid = await basecomm.getLeaveID();
        return Promise.all([dates, leaveid])
    }
    return new Promise((resolve, reject) => {
        tmpSqlDate().then((result) => {
            conf.vuex = result[0].recordset;
            let leaveid = `00000${result[1].recordset[0].id + 1}`;
            let leaveDH = `${conf.formtype.leave}${conf.vuex[0].strdate}${leaveid.substr(leaveid.length - 4, 4)}`
            if (leaveData.ispass !== 1) {
                reject({ success: false, msg: '日期驗證失敗' });
            } else {
                //GH,XM,KSRQ,JSRQ,RQCD,QJLB,KSSJ,SJCD,QJYY,OPI
                let sqlLine = sqlQuery.queryLeave.insertLeave + `('${leaveDH}','${leaveData.accountid}','${leaveData.fullname}',
                '${leaveData.startDate}','${leaveData.endDate}',
                '${leaveData.dateCount}',
                '${leaveData.leaveType}','${leaveData.startTimes}',
                '${leaveData.timesCount}','${leaveData.remark}',
                '${leaveData.opid}','${leaveData.agentUsr}')`
                msDB.dbQuery(sqlLine, (err, rows) => {
                    if (err) {
                        reject({ success: false, msg: '數據保存失敗' });
                    } else {
                        console.log(rows);
                        resolve({ success: true, msg: rows });
                    }
                })
            }
        })
    })
}

/**
 * 更新修改請假單
 */
leavesBase.upgradeLeave = (leaveData) => {
 console.log(sqlQuery.queryLeave.updateLeave.toString(), leaveData.leaveType, leaveData.startDate, leaveData.endDate, leaveData.dateCount, leaveData.startTimes, leaveData.timesCount, leaveData.remark, leaveData.autoid)
 console.log(aaa);

}

module.exports = leavesBase;