function generatePin() {
    const random = Math.round(Math.random() * 10000)
    return random;
}


function getPin() {
    const pin = generatePin();
    const pins = pin / 1000;
    if (pins >= 1) {
        return pin;
    }
    else {
        return getPin();
    }
}


document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const display = document.getElementById('display-pin');
    display.value = pin;
})


document.getElementById('calculator').addEventListener('click', function (event) {
    const numbers = event.target.innerText;
    const typedNumbersField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumbersField.value;
    if (isNaN(numbers)) {
        if (numbers === 'C') {

            typedNumbersField.value = '';
        }
        else if (numbers === '<') {
            const preNumber = previousTypedNumber.split('');
            preNumber.pop();
            const remainingDigits = preNumber.join('');
            typedNumbersField.value = remainingDigits
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + numbers;
        typedNumbersField.value = newTypedNumber;
    }
})


document.getElementById('btn-submit').addEventListener('click', function () {
    const pin = document.getElementById('display-pin');
    const pinValue = pin.value;

    const typedNumber = document.getElementById('typed-numbers');
    const typedNumbersValue = typedNumber.value;

    const rightPin = document.getElementById('right-pin');
    const wrongPin = document.getElementById('wrong-pin');
    if (pinValue === typedNumbersValue) {
        rightPin.style.display = 'block';
        wrongPin.style.display = 'none';

    }
    else {
        wrongPin.style.display = 'block';
        rightPin.style.display = 'none';
    }

})


const product = 5; const price = "7"; const subTotal = product * price; const tax = subTotal/10; const total = subTotal + tax; 
console.log(total)