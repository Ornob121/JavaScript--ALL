function ticketPrice (number){
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;
    let price = 0;
    if(number <= 100){
     price = number * first100Rate;
    }
    else if(number <= 200){
        const first100Price = first100Rate * 100;
        const restPrice = second100Rate * (number - 100);
        price = first100Price + restPrice;
    }
    else if(number > 200){
        const first100Price = first100Rate * 100;
        const second100Price = second100Rate * 100;
        const restPrc = restRate * (number - 200);
        price = first100Price + second100Price + restPrc;
    }
    return price;
}


const ticket = ticketPrice(120);
console.log(ticket);




let arr = [2, 6, 8, 9, 6, 3, 4, 6, 5];
console.log(arr.length);