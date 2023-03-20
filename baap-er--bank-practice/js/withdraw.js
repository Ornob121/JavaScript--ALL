document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmount.value;
    const myWithdrawAmount = parseFloat(withdrawAmountString);
    withdrawAmount.value = '';
    if (isNaN(myWithdrawAmount)) {
        alert('Please inter a number as your withdrawal amount');
        return;
    }
    
    const myInitialBalance = document.getElementById('initial-balance');
    const myBalance = myInitialBalance.innerText;

    const afterWithdrawalMyBalance = myBalance - myWithdrawAmount;
    
    if (myWithdrawAmount > myBalance) {
        alert('You cannot withdraw more than what you have in your account');
        return;
    }
    

    myInitialBalance.innerText = afterWithdrawalMyBalance;

    
    
    const previousWithdraw = document.getElementById('amount-withdraw');
    const previousWithdrawString = previousWithdraw.innerText;
    const preWithdrawalAmount = parseFloat(previousWithdrawString);


    const totalWithdraw = myWithdrawAmount + preWithdrawalAmount;

    previousWithdraw.innerText = totalWithdraw;



})