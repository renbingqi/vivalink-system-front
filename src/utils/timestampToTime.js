// eslint-disable-next-line no-unused-vars
function timeStampToTime(timestamp){
    var date = new Date(timestamp );//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    // var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D =date.getDate() < 10 ? '0'+date.getDate():date.getDate();
    // var h = date.getHours() + ':';
    // var m = date.getMinutes() + ':';
    // var s = date.getSeconds();
    return M+D;
}
export default timeStampToTime