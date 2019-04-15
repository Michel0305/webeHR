module.exports = {
    // 基本人事資料信息
    getAllUser: `select account_id,full_name,zj,convert(nvarchar(10),csrq,111) as csrq,address,sfzno,sfzlimit,sex,married,zw,gw,cb,bm,bmid,kb,xb,bc,cbzx,zjqf,convert(nvarchar(10),jcrq,111) as jcrq,jg,xl,zy,byxx,sf,partid,convert(nvarchar(10),bysj,111) as bysj,phoneNumber  from res_user_temp where jn='在職'`,
    getDepartment: `select bmbh,bmmc,fzr,bmzz,sjbm from RES_DEPARTMENT group by bmbh,bmmc,fzr,bmzz,sjbm`,

    queryLeave: {
        getAllLeave: ` select * from RES_HR_RSQJ `,
        getParamsLeave:` select * from RES_HR_RSQJ where 1=1 and convert(nvarchar(7),KSRQ,23) = convert(nvarchar(7),getdate(),23)`,
        getUserLeaveMinute:` select COUNT(*) as cnt,isnull(SUM(RQCD),0) as daycnt,isnull(SUM(DATEPART(HOUR,SJCD)),0) as hourcnt,isnull(SUM(DATEPART(MINUTE,sjcd)),0) as minutecnt from RES_HR_RSQJ where 1=1 and convert(nvarchar(7),KSRQ,23) = convert(nvarchar(7),getdate(),23) `,
        checkLeaveDate:` select dbo.leaveForCheck`,
        insertLeave:` insert into RES_HR_RSQJ(GH,XM,KSRQ,JSRQ,RQCD,QJLB,KSSJ,SJCD,QJYY,OPID,Agent_GH) VALUES `,        
    },
    base:{
        getDate:` select GETDATE() as dtNow ,CONVERT(nvarchar(10),GETDATE(),23) as dtDate,CONVERT(nvarchar(8),GETDATE(),24) as dtTime,
		DATEPART(YEAR,GETDATE()) as dtYear,DATEPART(MONTH,GETDATE()) dtMonth,
		DATEPART(DAY,GETDATE()) as dtDay,DATEPART(HOUR,GETDATE()) as dtHour,DATEPART(MINUTE,GETDATE()) as dtMinute,
		DATEPART(SECOND,GETDATE()) as dtSecond,DATEPART(WEEKDAY,GETDATE()) as dtWeekday,DATEPART(WEEK,GETDATE()) as dtWeek,
		DATEPART(DAYOFYEAR,GETDATE()) as dtDayifyear,REPLACE(REPLACE(REPLACE(CONVERT(nvarchar(30),GETDATE(),20),'-',''),' ',''),':','') as strDate `
    }


}