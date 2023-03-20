
// This is where the bank js file is.

document.getElementById('btn-deposit').addEventListener('click', function () {
    const addedDeposit = document.getElementById('amount-deposit');
    const newDepositString = addedDeposit.value;
    const newDeposit = parseFloat(newDepositString);
    const previousDeposit = document.getElementById('added-amount');
    addedDeposit.value = '';
    if (isNaN(newDeposit)) {
        alert('Please provide a number as your deposit amount')
        return;
    }

    const preDepositString = previousDeposit.innerText
    const preDeposit = parseFloat(preDepositString);
    const totalDeposit = preDeposit + newDeposit;

    previousDeposit.innerText = totalDeposit;

    const myBalance = document.getElementById('my-balance');
    const myTotalBalance = myBalance.innerText;
    const myNewTotalBalance = parseFloat(myTotalBalance);

    const myTotal = myNewTotalBalance + newDeposit;


    myBalance.innerText = myTotal;


})