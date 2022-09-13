
describe('calculatePayments tests', function(){

it('should calculate the monthly rate correctly', function () {
  const values= {
    amountC:100000, 
    yearsB: 8,
    rateL: 8.8
  };
  expect (calculateMonthlyPayment(values)).toEqual(1454.67);
  // ...
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values= {
    amountC:9999, 
    yearsB: 8,
    rateL: 8.4
  };
  expect (calculateMonthlyPayment(values)).toEqual(143.39);
});
})

describe('negative tests', function(){
it("should return NaN", function() {
  // ..
  const values= {
    amountC:9999, 
    yearsB: 'lam',
    rateL: 8.4
  };
  expect (calculateMonthlyPayment(values)).toEqual(NaN);
});
it("should return NaN when string entered", function() {
  // ..
  const values= {
    amountC:9999, 
    yearsB: 'lam',
    rateL: 12
  };
  expect (calculateMonthlyPayment(values)).toEqual(NaN);
});

it("should return NaN when 0 entered for ", function() {
  // ..
  const values= {
    amountC:9999, 
    yearsB: 12,
    rateL: 0
  };
  expect (calculateMonthlyPayment(values)).toEqual(NaN);
});
})
/// etc
afterEach(function(){
  InputDeviceInfo.values='';
 
})
beforeEach(() => {
  console.log('before')
})