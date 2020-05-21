describe("Text-input-bill factory function" ,function(){
    it("should charge R2.75 for each new call", function(){
        var textBillFunction = textInputBill();
        textBillFunction.forEachCall();
        assert.equal(2.75, textBillFunction.totalCallsTotal() )
     });
     it("should charge R0.75 for each new sms", function(){
        var textbillBillFunction = calculateBill();
        textBillFunction.forEachSms();
        assert.equal(0.75, textBillFunction.totalSmsTotal() )
    })
});