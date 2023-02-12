function factorial (number){
    if(number == 5){
        return 5;
    }
    return number * factorial(number + 1);
}

const result = factorial(1);
console.log(result);


/* 
 1 * factorial(1 + 1)
 1 * 2 * factorial(2 + 1)
 1 * 2 * 3 * factorial(3 + 1)
 1 * 2 * 3 * 4 * factorial(4 + 1) -->> the condition is met so it will only return 5 and not cal any further
 1 * 2 * 3 * 4 * 5 will be the result

*/