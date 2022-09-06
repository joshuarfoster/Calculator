it('should calculate the monthly rate correctly', function () {
    const values = {
        amount:15000,
        years:7,
        rate:3.2

    }
    expect(calculateMonthlyPayment(values)).toEqual('199.55')
  });
  
  
  it("should return a result with 2 decimal places with a zero at the end", function() {
    const values = {
        amount: 3000,
        years:4,
        rate:3
    }
    expect(calculateMonthlyPayment(values)).toEqual('66.40')
  });
  
  it("should return a result with 2 decimal places with two zeroes at the end", function() {
    const values = {
        amount: 6008.55,
        years:4,
        rate:3
    }
    expect(calculateMonthlyPayment(values)).toEqual('133.00')
  });