window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
   
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amountC: +(document.getElementById("loan-amount").value),
    yearsB: +(document.getElementById("loan-years").value),
    rateL: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment


// Get the current values from the UI
// Update the monthly payment
function update() {
  const oldValues= getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(oldValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  console.log(values);
  const interestRate= (((values.rateL)/100)/12);
  const numberofPayments= (values.yearsB*12);
  return +(Math.round(((values.amountC * interestRate)/ (1- ((1+interestRate)**-numberofPayments)))+"e+2")
  +"e-2");

}

//Given a string representing the monthly payment value,
//update the UI to show the value.
function updateMonthly(monthly) {
  const paymentTime = document.getElementById('monthly-payment'); 
  paymentTime.innerText= '$' + monthly; 
}


