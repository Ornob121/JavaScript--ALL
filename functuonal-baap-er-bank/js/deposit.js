document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputId('deposit-amount');


    const previousDeposit = previousAmount('amount-deposit');

    const newDepositTotal = newDepositAmount + previousDeposit;

    setNewValue('amount-deposit', newDepositTotal);


    const previousBalanceTotal = previousAmount('initial-balance');
    
    const newTotalBalance = previousBalanceTotal + newDepositAmount;

    setNewValue('initial-balance', newTotalBalance);
   
})