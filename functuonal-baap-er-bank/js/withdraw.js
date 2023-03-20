document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawalAmount = getInputId('withdraw-amount');

    const previousWithdrawal = previousAmount('amount-withdraw');

    const myWithdrawal = previousWithdrawal + newWithdrawalAmount;

    setNewValue('amount-withdraw', myWithdrawal);

    const previousBalanceTotal = previousAmount('initial-balance');
    const afterWithdrawalBalance = previousBalanceTotal - newWithdrawalAmount;

    setNewValue('initial-balance', afterWithdrawalBalance);
})