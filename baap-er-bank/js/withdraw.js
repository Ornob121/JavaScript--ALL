document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdraw = document.getElementById('withdraw-amount')
    const withdrawAmountString = withdraw.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    withdraw.value = '';
    
    if (isNaN(withdrawAmount)) {
        alert('Please provide a number as your withdraw amount')
        return;
    }



    const previousWithdraw = document.getElementById('amount-withdraw');
    const previousWithdrawAmountString = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);


    const totalWithdraw = withdrawAmount + previousWithdrawAmount;

    //



    const myPreviousBalance = document.getElementById('my-balance')
    const myPreviousBalanceString = myPreviousBalance.innerText;
    const myRemainingBalance = parseFloat(myPreviousBalanceString);


    const afterWithdrawalMyBalance = myRemainingBalance - withdrawAmount;










    if (withdrawAmount > myRemainingBalance) {
        alert('You can not withdraw more than what you have on your account');
    }
    else {
        previousWithdraw.innerText = totalWithdraw;

        myPreviousBalance.innerText = afterWithdrawalMyBalance;
    }
})