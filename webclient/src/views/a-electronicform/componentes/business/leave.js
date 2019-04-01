var moment = require('moment')

var leaveConn = function() {
}

leaveConn.checkdate = (stDate, edDate) => {
  if (stDate == undefined || stDate == '' || stDate == null || edDate == undefined || edDate == '' || edDate == null) {
    return false
  } else {
    const sDate = moment(stDate).format('YYYY/MM/DD')
    const eDate = moment(edDate).format('YYYY/MM/DD')
    const sTime = moment(stDate).format('HH:mm:ss')
    const eTime = moment(edDate).format('HH:mm:ss')
  }
  // console.log(typeof(edDate));
  // if((stDate !==undefined || stDate !==null ) & (edDate !==undefined || edDate !==null )){
  //     console.log('XXXXXXX');
  // }else{
  //     console.log('MMMMMMMM');
  // }
}

module.exports = leaveConn
