window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
    const values ={amount:15000,years:3, rate:5};
    const amountInput = document.getElementById("loan-amount");
    amountInput.value=values.amount;
    const yearsInput = document.getElementById("loan-years");
    yearsInput.value=values.years;
    const rateInput = document.getElementById("loan-rate");
    rateInput.value=values.rate;
    update();
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    const inputValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(inputValues))

  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    const i =((values.rate/100)/12);
    const n =values.years*12;
    const numerator = values.amount * i;
    const denominator = 1 - ((1+i)**(-n));
    const answer = numerator/denominator;
    const rounded = (Math.round(100*answer))/100;
    const calculation = `${rounded}`;
    if (calculation[calculation.length-2]==='.'){
            return`${rounded}0`
        }
    else if(calculation[calculation.length-3]!=='.'){
        return`${rounded}.00`
    }
    else{
        return`${rounded}`
    }
   

    }
    

  
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    let payment= document.getElementById('monthly-payment');
    payment.innerText = "$" + monthly;
    
  }
  