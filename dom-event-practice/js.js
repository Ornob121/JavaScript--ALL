document.getElementById('btn').addEventListener('click', function () {
    const price = document.getElementById('price');
    const priceString = price.innerText;
    const priceNumber = parseFloat(priceString);

    const payment = document.getElementById('dam');
    const paymentString = payment.innerText;
    const paymentNumber = parseFloat(paymentString);


    const inputText = document.getElementById('input-coupon');
    if (inputText.value == 'DISC30') {
        const discount = priceNumber / 100 * 30;
        const paymentWithDiscount = priceNumber - discount;
        payment.innerText = paymentWithDiscount;
    }
    else {
        alert('Wrong coupon code')
        payment.innerText = priceNumber;
    }
})