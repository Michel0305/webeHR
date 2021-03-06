USE [webehr]
GO
/****** Object:  UserDefinedFunction [dbo].[annualLeaveCnt]    Script Date: 2019/04/15 17:04:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Michel
-- Create date: 年休假天數計算
-- Description:	<Description, ,>
-- =============================================
CREATE FUNCTION [dbo].[annualLeaveCnt]
(@userID nvarchar(30))
RETURNS int
AS
BEGIN
	Declare @days int , @annuaCnt int
	set @days = 0
	Declare @inDate datetime,@nowDate datetime
	Declare @years int
	set @nowDate = CONVERT(nvarchar(10),getdate(),111)
	select @inDate = jcrq from res_user_temp where account_id=@userID
	set @years= DATEDIFF(MONTH,@inDate,getdate())/12
	if(@years<1)
		set @annuaCnt = 0
	if(@years>=1 and @years<10)
		set @annuaCnt =5
	if(@years>=10 and @years<20)
		set @annuaCnt =10
	if(@years>=20)
		set @annuaCnt=15    
	Declare @stAnnualLeave datetime ,@edAnnualLeave datetime
    set @stAnnualLeave = DATEADD(YEAR,@years,@inDate)
	set @edAnnualLeave = DATEADD(DAY,-1,DATEADD(YEAR,@years+1,@inDate))		 
	select @days = SUM(RQCD) from RES_HR_RSQJ where QJLB='0' and GH=@userID and KSRQ between @stAnnualLeave and @edAnnualLeave
	--set @days = 	 
	RETURN (@annuaCnt - @days)

END
GO
/****** Object:  UserDefinedFunction [dbo].[leaveForCheck]    Script Date: 2019/04/15 17:04:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Michel
-- Create date: 判斷假期日期是否重合
-- Description:	<Description, ,>
-- =============================================
CREATE FUNCTION [dbo].[leaveForCheck]
(@leaveType int,@userid nvarchar(30),@stDateTimes datetime,@dateTimeCnt datetime,@agentUsr nvarchar(30)
)

-- select  dbo.leaveForCheck(0,'59336','2019/04/10 12:30:00','2019/04/10 01:00:00')
RETURNS int
AS
BEGIN
	Declare @pass int
	Declare @Cnt int
	Declare @edDateTimes datetime
	set @edDateTimes = DATEADD(MINUTE,(DATEPART(HOUR,@dateTimeCnt)*60+DATEPART(MINUTE,@dateTimeCnt)),@stDateTimes)
	set @pass =1

	if(@leaveType =0) --驗證是否有年休假期
	begin		 
		if dbo.annualLeaveCnt(@userid)<=0
		return 2
	end

	if exists (select  gh from RES_HR_RSQJ where ((KSRQ >=CONVERT(nvarchar(10),@stDateTimes,111) and KSRQ<=CONVERT(nvarchar(10),@edDateTimes,111))
		or (JSRQ >=CONVERT(nvarchar(10),@stDateTimes,111) and JSRQ<=CONVERT(nvarchar(10),@edDateTimes,111))) and GH = @agentUsr)
	return 3

	
	if(CONVERT(nvarchar(8),@stDateTimes,8) ='00:00:00')
	or(CONVERT(nvarchar(8),@edDateTimes,8) ='00:00:00')
	begin		--驗證假期是否有重合
		select @Cnt = COUNT(GH)
		from RES_HR_RSQJ where 
		((KSRQ >=CONVERT(nvarchar(10),@stDateTimes,111) and KSRQ<=CONVERT(nvarchar(10),@edDateTimes,111))
		or (JSRQ >=CONVERT(nvarchar(10),@stDateTimes,111) and JSRQ<=CONVERT(nvarchar(10),@edDateTimes,111)))		
		and GH=@userid
		if(@Cnt>0)
			set @pass =0
	end else
	begin
		select @Cnt = COUNT(GH) from RES_HR_RSQJ where 
		((KSRQ >=CONVERT(nvarchar(10),@stDateTimes,111) and KSRQ<=CONVERT(nvarchar(10),@edDateTimes,111))
		or (JSRQ >=CONVERT(nvarchar(10),@stDateTimes,111) and JSRQ<=CONVERT(nvarchar(10),@edDateTimes,111)))
		and RQCD > 0 and GH=@userid
		if(@Cnt>0)
		begin
			set @pass =0
		end else
		begin
			select @Cnt = COUNT(GH)	from RES_HR_RSQJ where 
				CONVERT(nvarchar(10),KSRQ,111) = CONVERT(nvarchar(10),@edDateTimes,111)
				and(
				 CONVERT(nvarchar(8),@stDateTimes,24) between (case when CONVERT(nvarchar(8),KSSJ,24) ='00:00:00' then '07:00:00' else CONVERT(nvarchar(8),KSSJ,24) end)
				 and CONVERT(nvarchar(8),DATEADD(MINUTE,(DATEPART(HOUR,case when CONVERT(nvarchar(8),SJCD,24) ='00:00:00'
				 then '17:00:00' else CONVERT(nvarchar(8),SJCD,24) end )*60+DATEPART(MINUTE,case when CONVERT(nvarchar(8),SJCD,24) ='00:00:00' 
				 then '00:00:00' else CONVERT(nvarchar(8),SJCD,24) end )),KSSJ),24)
				 or 
				  CONVERT(nvarchar(8),@edDateTimes,24) between (case when CONVERT(nvarchar(8),KSSJ,24) ='00:00:00' then '07:00:00' else CONVERT(nvarchar(8),KSSJ,24) end)
				 and CONVERT(nvarchar(8),DATEADD(MINUTE,(DATEPART(HOUR,case when CONVERT(nvarchar(8),SJCD,24) ='00:00:00'
				 then '17:00:00' else CONVERT(nvarchar(8),SJCD,24) end )*60+DATEPART(MINUTE,case when CONVERT(nvarchar(8),SJCD,24) ='00:00:00' 
				 then '00:00:00' else CONVERT(nvarchar(8),SJCD,24) end )),KSSJ),24)
				 ) 			
				and GH=@userid
			if(@Cnt>0)
				set @pass =0			
		end
	end
	/*Declare @Tmp Table(kssj datetime,jssj datetime)	
	insert into @Tmp select KSSJ,DATEADD(MINUTE,DATEPART(HOUR,SJCD)*60+DATEPART(MINUTE,SJCD),KSSJ) from RES_HR_RSQJ where 
		(KSRQ >=CONVERT(nvarchar(10),@stDateTimes,111) and KSRQ<=CONVERT(nvarchar(10),@edDateTimes,111))
		and (JSRQ >=CONVERT(nvarchar(10),@stDateTimes,111) and JSRQ<=CONVERT(nvarchar(10),@edDateTimes,111))		
		and GH=@userid*/ 
	RETURN @pass
END
GO
/****** Object:  Table [dbo].[annualleave]    Script Date: 2019/04/15 17:04:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[annualleave](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userid] [nvarchar](50) NULL,
	[annualdate] [datetime] NULL,
 CONSTRAINT [PK_annualleave] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RES_DEPARTMENT]    Script Date: 2019/04/15 17:04:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RES_DEPARTMENT](
	[bmbh] [int] NOT NULL,
	[bmmc] [varchar](40) NULL,
	[fzr] [varchar](8) NULL,
	[bmzz] [varchar](120) NULL,
	[sjbm] [int] NULL,
	[rs] [int] NULL,
	[bmjb] [varchar](30) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RES_HR_RSQJ]    Script Date: 2019/04/15 17:04:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RES_HR_RSQJ](
	[AutoID] [int] IDENTITY(1,1) NOT NULL,
	[QJDNO] [nvarchar](50) NOT NULL,
	[GH] [nvarchar](50) NOT NULL,
	[XM] [nvarchar](50) NULL,
	[SQRQ] [datetime] NOT NULL,
	[KSRQ] [datetime] NOT NULL,
	[JSRQ] [datetime] NOT NULL,
	[RQCD] [int] NULL,
	[QJLB] [int] NOT NULL,
	[KSSJ] [datetime] NOT NULL,
	[SJCD] [datetime] NOT NULL,
	[QJYY] [nvarchar](100) NULL,
	[OPID] [nvarchar](50) NULL,
	[FLAG] [int] NOT NULL,
	[ISBUG] [int] NOT NULL,
	[STATUS] [int] NOT NULL,
	[QHGS] [int] NULL,
	[NEXTQH] [nvarchar](50) NULL,
	[ISPRINT] [int] NULL,
	[Agent_GH] [nvarchar](50) NULL,
	[Agent_XM] [nvarchar](50) NULL,
	[flowid] [int] NOT NULL,
	[infoDate] [datetime] NULL,
	[effectDate] [datetime] NULL,
 CONSTRAINT [PK_RES_HR_RSQJ] PRIMARY KEY CLUSTERED 
(
	[QJDNO] ASC,
	[GH] ASC,
	[KSRQ] ASC,
	[JSRQ] ASC,
	[QJLB] ASC,
	[KSSJ] ASC,
	[SJCD] ASC,
	[FLAG] ASC,
	[ISBUG] ASC,
	[STATUS] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[res_user_temp]    Script Date: 2019/04/15 17:04:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[res_user_temp](
	[account_id] [int] NOT NULL,
	[full_name] [nvarchar](50) NULL,
	[zj] [nvarchar](50) NULL,
	[csrq] [datetime] NULL,
	[address] [nvarchar](50) NULL,
	[sfzno] [nvarchar](50) NULL,
	[sfzlimit] [nvarchar](50) NULL,
	[sex] [nvarchar](5) NULL,
	[married] [nvarchar](50) NULL,
	[zw] [nvarchar](50) NULL,
	[gw] [nvarchar](50) NULL,
	[cb] [nvarchar](50) NULL,
	[bm] [nvarchar](50) NULL,
	[bmid] [nvarchar](20) NULL,
	[kb] [nvarchar](50) NULL,
	[xb] [nvarchar](50) NULL,
	[bc] [nvarchar](10) NULL,
	[cbzx] [nvarchar](20) NULL,
	[zjqf] [nvarchar](50) NULL,
	[jcrq] [datetime] NULL,
	[jg] [nvarchar](50) NULL,
	[xl] [nvarchar](50) NULL,
	[zy] [nvarchar](50) NULL,
	[byxx] [nvarchar](50) NULL,
	[sf] [nvarchar](50) NULL,
	[partid] [nvarchar](20) NULL,
	[bysj] [datetime] NULL,
	[phoneNumber] [nchar](20) NULL,
	[updateTime] [datetime] NOT NULL,
	[params] [int] NULL,
 CONSTRAINT [PK_res_user_temp] PRIMARY KEY CLUSTERED 
(
	[account_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RES_HR_RSQJ] ADD  CONSTRAINT [DF_RES_HR_RSQJ_SQRQ]  DEFAULT (CONVERT([nvarchar](10),getdate(),(111))) FOR [SQRQ]
GO
ALTER TABLE [dbo].[RES_HR_RSQJ] ADD  CONSTRAINT [DF_RES_HR_RSQJ_FLAG]  DEFAULT ((0)) FOR [FLAG]
GO
ALTER TABLE [dbo].[RES_HR_RSQJ] ADD  CONSTRAINT [DF_RES_HR_RSQJ_ISBUG]  DEFAULT ((0)) FOR [ISBUG]
GO
ALTER TABLE [dbo].[RES_HR_RSQJ] ADD  CONSTRAINT [DF_RES_HR_RSQJ_STATUS]  DEFAULT ((0)) FOR [STATUS]
GO
ALTER TABLE [dbo].[RES_HR_RSQJ] ADD  CONSTRAINT [DF_RES_HR_RSQJ_QHGS]  DEFAULT ((0)) FOR [QHGS]
GO
ALTER TABLE [dbo].[RES_HR_RSQJ] ADD  CONSTRAINT [DF_RES_HR_RSQJ_ISPRINT]  DEFAULT ((0)) FOR [ISPRINT]
GO
ALTER TABLE [dbo].[RES_HR_RSQJ] ADD  CONSTRAINT [DF_RES_HR_RSQJ_infoDate]  DEFAULT (getdate()) FOR [infoDate]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'用戶名' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'annualleave', @level2type=N'COLUMN',@level2name=N'userid'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'年休日期' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'annualleave', @level2type=N'COLUMN',@level2name=N'annualdate'
GO
