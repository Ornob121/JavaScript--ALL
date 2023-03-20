function getInputId(inputId) {
    const amount = document.getElementById(inputId);
    const amountValueString = amount.value;
    const amountValue = parseFloat(amountValueString);
    amount.value = '';
    return amountValue;
};


function previousAmount(preAmount) {
    const previousAmount = document.getElementById(preAmount);
    const preAmountString = previousAmount.innerText;
    const preAmountNumber = parseFloat(preAmountString);
    return preAmountNumber;
}


function setNewValue(preAmountId, newValue) {

    const amount = document.getElementById(preAmountId);
    amount.innerText = newValue;
}




