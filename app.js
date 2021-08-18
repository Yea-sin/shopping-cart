function updateInputValue(product ,isIncreasing, price){
    const productInput = document.getElementById(product + '-input');
    const productValue  = parseInt(productInput.value);
    
    if(isIncreasing){
        productInput.value = productValue + 1;
    }
    else if(productValue > 0){
        productInput.value = productValue - 1;
    }

    const phoneText = document.getElementById(product + '-number');
    phoneText.innerText = productInput.value * price;

    getInputValue()

}

function getInputValue(){
    const phoneInput = (document.getElementById('phone-input').value) * 1219;
    const caseInput = (document.getElementById('case-input').value) * 59;

    const subtotal = phoneInput + caseInput;
    const tax = subtotal / 10;
    const total = subtotal + tax;

    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-cost').innerText = total;










    /* let phoneTotal = phoneInput * parseInt(1219);
    let caseTotal = caseInput * parseInt(59); 

    const totalInput = phoneTotal + caseTotal;

    const tax = document.getElementById('tax-amount');
    tax.innerText = totalInput / 10;
    
    const subtotal = document.getElementById('sub-total');

    subtotal.innerText = totalInput;

    document.getElementById('total-cost').innerText = totalInput + tax; */


}


