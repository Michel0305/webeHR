module.exports = {
    // 基本人事資料信息
    getAllUser: `select account_id,full_name,zj,convert(nvarchar(10),csrq,111) as csrq,address,sfzno,sfzlimit,sex,married,zw,gw,cb,bm,bmid,kb,xb,bc,cbzx,zjqf,convert(nvarchar(10),jcrq,111) as jcrq,jg,xl,zy,byxx,sf,partid,convert(nvarchar(10),bysj,111) as bysj,phoneNumber  from res_user_temp where jn='在職'`,
    getDepartment: `select bmbh,bmmc,fzr,bmzz,sjbm from RES_DEPARTMENT group by bmbh,bmmc,fzr,bmzz,sjbm`,

    queryLeave: {
        getAllLeave: ` select * from RES_HR_RSQJ `,  //獲取請假單
        getParamsLeave: ` select * from RES_HR_RSQJ where 1=1 and convert(nvarchar(7),KSRQ,23) = convert(nvarchar(7),getdate(),23)`, //參數查詢
        getUserLeaveMinute: ` select COUNT(*) as cnt,isnull(SUM(RQCD),0) as daycnt,isnull(SUM(DATEPART(HOUR,SJCD)),0) as hourcnt,isnull(SUM(DATEPART(MINUTE,sjcd)),0) as minutecnt from RES_HR_RSQJ where 1=1 and convert(nvarchar(7),KSRQ,23) = convert(nvarchar(7),getdate(),23) `, //獲取月請假的次數及天數
        checkLeaveDate: ` select dbo.leaveForCheck`, //獲取請假是否有效
        getLeaveID: `select COUNT(gh) as id  from RES_HR_RSQJ where DATEPART(YEAR,SQRQ) = DATEPART(YEAR,GETDATE())`, //獲取請假id
        insertLeave: ` insert into RES_HR_RSQJ(QJDNO,GH,XM,KSRQ,JSRQ,RQCD,QJLB,KSSJ,SJCD,QJYY,OPID,Agent_GH) VALUES `,  //插入數據
        updateLeave: ` update RES_HR_RSQJ set QJLB= '%s' ,KSRQ= '%s' ,JSRQ= '%s' ,RQCD= '%s' ,KSSJ= '%s' ,SJCD= '%s' ,QJYY= '%s'  where autoid= '%s' `,
    },
    base: {
        getDate: ` select GETDATE() as dtNow ,CONVERT(nvarchar(10),GETDATE(),23) as dtDate,CONVERT(nvarchar(8),GETDATE(),24) as dtTime,
		DATEPART(YEAR,GETDATE()) as dtYear,DATEPART(MONTH,GETDATE()) dtMonth,
		DATEPART(DAY,GETDATE()) as dtDay,DATEPART(HOUR,GETDATE()) as dtHour,DATEPART(MINUTE,GETDATE()) as dtMinute,
		DATEPART(SECOND,GETDATE()) as dtSecond,DATEPART(WEEKDAY,GETDATE()) as dtWeekday,DATEPART(WEEK,GETDATE()) as dtWeek,
		DATEPART(DAYOFYEAR,GETDATE()) as dtDayifyear,REPLACE(REPLACE(REPLACE(CONVERT(nvarchar(30),GETDATE(),20),'-',''),' ',''),':','') as strDatetime,
		REPLACE(REPLACE(REPLACE(CONVERT(nvarchar(10),GETDATE(),111),'/',''),' ',''),':','') as strdate `
    }


}