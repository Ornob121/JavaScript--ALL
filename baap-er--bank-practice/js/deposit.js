document.getElementById('btn-deposit').addEventListener('click', function(){
    const myDepositAmount = document.getElementById('deposit-amount');
    const depositAmountString = myDepositAmount.value;
    const depositAmount = parseFloat(depositAmountString);
    

    const previousDepositAmount = document.getElementById('amount-deposit');
    const preDepositAmountString = previousDepositAmount.innerText;
    const preDepositAmount = parseFloat(preDepositAmountString);

    

    const newDepositAmount = depositAmount + preDepositAmount;
    console.log(newDepositAmount)
    
    previousDepositAmount.innerText = newDepositAmount;

    
    const myInitialBalance = document.getElementById('initial-balance');
    const initialBalanceString = myInitialBalance.innerText;
    const initialBalance = parseFloat(initialBalanceString);

    const myTotalBalance = initialBalance + depositAmount;
    myInitialBalance.innerText = myTotalBalance;


    myDepositAmount.value = '';
})