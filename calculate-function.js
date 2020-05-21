var  calculateBill = function(){
    var call =0;
    var sms = 0;
    var totalBill = 0;
    function forEachCallAdd(){
        call +=2.75;
        totalBill += 2.75

      }
  
      function forEachSmsAdd(){
        sms += 0.75;
        totalBill += 0.75
      }
  
      function newSmsTotal(){
        return sms;
      }
  
      function newCallsTotal(){
        return call;
      }
      return {
        forEachCallAdd,
       newCallsTotal ,
       forEachSmsAdd, 
       newSmsTotal
        
      }
  
  }

// function calculateBillEvent(){
    
//     var billString; 
    
//     var totalBill = calculateBill(value); 
// }

// btn.addEventListener('click', calculateBillEvent);