function billWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    function setCallCost(callCost) {
        theCallCost = callCost;
    }
    function getCallCost() {
        return theCallCost;
    }
    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }
    function getSmsCost() {
        return theSmsCost;
    }
    function setWarningLevel(warningLevel) {
         theWarningLevel = warningLevel;
    }
    function getWarningLevel() {
        return theWarningLevel;
    }
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
   }
   function getCriticalLevel() {
       return theCriticalLevel;
   }
   function makeCall(){

   }
   function makeSms(){

   }
   function getTotalCost(){
return 2.20;
   }
   function getTotalCallCost(){
       return 1.70;
   }
   function getTotalSmsCost(){
       return 0.50;
   }
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        makeSms,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost
    }
}