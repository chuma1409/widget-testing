describe("Calculate-bill testing" ,function(){
    it("should charge R2.75 for each new call", function(){
       var calculateBillFunction = calculateBill();
       calculateBillFunction.forEachCallAdd();
       assert.equal(2.75, calculateBillFunction.newCallsTotal() )
    });
    it("should charge R0.75 for each new sms", function(){
        var calculateBillFunction = calculateBill();
        calculateBillFunction.forEachSmsAdd();
        assert.equal(0.75, calculateBillFunction.newSmsTotal() )
    });
it("should update totalBill to R8.50 when 2 calls and 4 sms are made", function(){
    var calculateBillFunction = calculateBill();
    calculateBillFunction.forEachCallAdd();
    calculateBillFunction.forEachCallAdd();
    calculateBillFunction.forEachSmsAdd();
    calculateBillFunction.forEachSmsAdd();
    calculateBillFunction.forEachSmsAdd();
    calculateBillFunction.forEachSmsAdd();
    assert.equal(5.50, calculateBillFunction.newCallsTotal() )
    assert.equal(3.00, calculateBillFunction.newSmsTotal() )
});
});