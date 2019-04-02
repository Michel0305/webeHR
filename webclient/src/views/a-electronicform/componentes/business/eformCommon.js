var moment = require('moment')
require('date-utils')

var funCommon = function() {
}

/**
 * 日期格式轉換
 */
funCommon.DateTimeformat=(infoDate,formattype)=>{
  return moment(infoDate).format(formattype)
}

/**
 * 計算請假天數及時數
 */
funCommon.checkleavedate = (stDate, edDate) => {
  var date = new Date(stDate)
  if (stDate == undefined || stDate == '' || stDate == null || edDate == undefined || edDate == '' || edDate == null) {
    return {days:'',uom:''}
  } else {
    const sDate = moment(stDate).format('YYYY/MM/DD')
    const eDate = moment(edDate).format('YYYY/MM/DD')
    const sTime = moment(stDate).format('HH:mm:ss')
    const eTime = moment(edDate).format('HH:mm:ss')
    // if((new Date(stDate))>(new Date(edDate))){
    //   console.log("ASSSSSSSSSSSSSSSSSSSSSSS");
    // }
    if(sDate !== eDate){
      return {days:date.getDaysBetween(edDate)+1,uom:'天'}
    }else{
      if(sTime =="00:00:00" || eTime =="00:00:00"){
        return {days:date.getDaysBetween(edDate)+1,uom:'天'}
      }else{
        let Hours =parseInt(date.getMinutesBetween(new Date(edDate))/60)+(date.getMinutesBetween(new Date(edDate))%60<30?0.0:0.5)        
        return {days:Hours,uom:'小時'}
      } 
    }       
  }
}

funCommon.getDaysofbetween = (stDate,edDate)=>{
  var date = new Date(stDate)
  return date.getDaysBetween(new Date(edDate))+1
}

funCommon.checkoverworkHours = (stTime,edTime)=>{
  //
  if (stTime == undefined || stTime == '' || stTime == null || edTime == undefined || edTime == '' || edTime == null) {
    return {days:'',uom:''}
  } 
  let Hours = parseInt(edTime.split(':')[0]) - parseInt(stTime.split(':')[0]);
  let minutes = Hours*60+parseInt(edTime.split(':')[1])-parseInt(stTime.split(':')[1]);
  return {days:parseInt((minutes/60))+ (minutes%60<30?0.0:0.5) ,uom:'小時'} 
}



module.exports = funCommon
