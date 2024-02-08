function calculateTotal() {
    // Get the value from each input field
    var one = document.getElementById('oneDollar').value || 0;
    var five = document.getElementById('fiveDollar').value || 0;
    var ten = document.getElementById('tenDollar').value || 0;
    var twenty = document.getElementById('twentyDollar').value || 0;
    var fifty = document.getElementById('fiftyDollar').value || 0;
    var hundred = document.getElementById('hundredDollar').value || 0;
    
    // Calculate the total value
    var total = (parseInt(one) * 1) + (parseInt(five) * 5) + 
                (parseInt(ten) * 10) + (parseInt(twenty) * 20) + 
                (parseInt(fifty) * 50) + (parseInt(hundred) * 100);
    
    // Display the total value
    document.getElementById('totalValue').innerText = 'Total value: $' + total;
}