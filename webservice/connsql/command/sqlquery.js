module.exports = {
    getAllUser: `select top 1 account_id,full_name,zj,convert(nvarchar(10),csrq,111) as csrq,address,sfzno,sfzlimit,sex,married,zw,gw,cb,bm,bmid,kb,xb,bc,cbzx,zjqf,jcrq,jg,xl,zy,byxx,sf,partid,bysj,phoneNumber  from res_user_temp where jn='在職'`
}