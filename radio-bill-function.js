var radioBill = function(){
    var tCalls = 0;
    var tSms = 0;
    var tAdd = 0;
function eachCall(){
    tCalls += 2.75;
    tAdd += 2.75;
}
function eachSms(){
    tSms += 0.75;
    tAdd += 0.75;
}
function tCallsTotal(){
    return tCalls;
}
function tSmsTotal(){
    return tSms;
}
function warningLevel(){
    return "warning";
}
function dangerLevel(){
    return "danger";
}
return{
    eachCall,
    eachSms,
    tCallsTotal,
    tSmsTotal,
    warningLevel,
    dangerLevel
}
}