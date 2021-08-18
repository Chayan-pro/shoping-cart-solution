//funtion problem solve the same number

function UpdateProductNum(product, price, isIncrising) {
    const productInput = document.getElementById(product + '-input');
    const caseInputText = productInput.value;
    let productFinal = parseInt(caseInputText);
    if (isIncrising) {
        productFinal = productFinal + 1;
    } else if (productFinal > 0) {
        productFinal = productFinal - 1;
    }
    productInput.value = productFinal;
    //upadate total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productFinal * price;

    //calculate total price
    calculateTotal();
}

//calculate total
function getInputValue(products) {
    const productInput = document.getElementById (products + '-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phonetotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phonetotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    
    //call sub total id
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

//phone handle event
document.getElementById('phone-plus').addEventListener('click', function () {
    UpdateProductNum('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    UpdateProductNum('phone', 1219, false);
})

//case handle event
document.getElementById('case-plus').addEventListener('click', function () {
    UpdateProductNum('case', 59, true);

});
document.getElementById('case-minus').addEventListener('click', function () {

    UpdateProductNum('case', 59, false);

});

