let FunBasics = () => { }

FunBasics.format = (details)=>{
    let arrList = details[0].split('?');
    let result =``
    if(arrList.length === 0) return details;
    for (let i = 0; i < arrList.length; i++){
        const el = arrList[i];
        i == arrList.length-1?result+=`${el}`:result+=`${el}${details[i+1]}`
    }
    return result
}
module.exports = FunBasics;