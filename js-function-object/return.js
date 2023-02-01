function add(num1, num2){
    // var sum = num1 + num2;
    return num1 + num2;
}

var total = add(40, 60);
console.log(total);



function buySnacks(money, money1, money2){
    console.log('Go to the hotel');
    console.log('than ask the waiter to give you some singara worth', money1);
    var singaraPrice = 5;
    var singaraQuantity = money1 / singaraPrice;
    var somuchaPrice = 10;
    var somuchaQuantity = money2 / somuchaPrice;
    console.log('Than buy somucha worth', money2); 
    return  money - (money1 + money2);
}

var totalCoast = buySnacks(500, 50, 20);
console.log(totalCoast);