var textInputBill = function(){
    var calls = 0;
    var smss = 0;
    var totalAdd = 0;
function forEachCall(){
    calls += 2.75;
    totalAdd += 2.75;
}
function forEachSms(){
    smss += 0.75;
    totalAdd += 0.75;
}
function totalCallsTotal(){
    return calls;
}
function totalSmsTotal(){
    return smss;
}
function warningLevel(){
    return "warning";
}
function dangerLevel(){
    return "danger";
}
return{
    forEachCall,
    forEachSms,
    totalCallsTotal,
    totalSmsTotal,
    warningLevel,
    dangerLevel
}
}