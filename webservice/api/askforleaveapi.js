var express = require('express');
var router = express.Router();
var leaveBase = require('./components/leave');

/**
 * 獲取請假數據
 */
router.get('/allleaves',(req,res,next)=>{
    leaveBase.allData().then((leaveData)=>{
        res.send(leaveData)
    }).catch(err=>{
        res.send(err)
    })    
})

/**
 * 條件查詢
 */
router.get('/userleaves',(req,res,next)=>{
    leaveBase.paramsGetData(`and AutoID=90633 `).then((leaveData)=>{
        res.send(leaveData);
    }).catch(err=>{
        res.send(leaveData);
    })
})

/**
 * 新生數據
 */
router.post('/inleaves',(req,res,next)=>{
    var testData = [{
        accountid:'36208',
        fullname:'項敏',
        leaveType: '0',
        startDate: '2019-04-08 07:00:00',
        endDate: '2019-04-08 09:30:00',
        remark: '測試請假',
        agentUsr: '17959',
        dateCount: '2.5',
        dateuom: '小时'
    }]
    leaveBase.inforLeaves(testData).then((rs)=>{
        res.send(rs)
    }).catch(err=>{
        console.log(err);
    })
    

})

/**
 * 修改
 */
router.post('/releaves',(req,res,next)=>{

})

/**
 * 刪除
 */
router.post('/delleaves',(req,res,next)=>{

})

module.exports = router;