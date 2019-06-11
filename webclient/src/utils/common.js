
commons = () => {
}

commons.dateFormats = (_datefmt, infoDate) => {
    let tmpDate = new Date(infoDate)
    var o = {
        "M+": tmpDate.getMonth() + 1, //月份 
        "d+": tmpDate.getDate(), //日 
        "H+": tmpDate.getHours(), //小时 
        "m+": tmpDate.getMinutes(), //分 
        "s+": tmpDate.getSeconds(), //秒 
        "q+": Math.floor((tmpDate.getMonth() + 3) / 3), //季度 
        "S": tmpDate.getMilliseconds() //毫秒 
    };
    console.log(o);

    if (/(y+)/.test(_datefmt))
        _datefmt = _datefmt.replace(RegExp.$1, (tmpDate.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(_datefmt))
            _datefmt = _datefmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));

    console.log(_datefmt)
    return _datefmt;
}


module.exports = commons;