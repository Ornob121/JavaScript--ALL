function factorial (number){
    let result = 1;
    for (let i = 1; i <= number; i++){
        result = result * i;
        console.log(result);
    }
    return result;
}


const result = factorial(5);
console.log(result);


function factorial1 (numbers){
    let result1 = 1;
    for (let i = 8; i >= numbers; i-- ){
        result1 = result1 * i;
        console.log(result1);
    }
    return result1;
}

const result1 = factorial1(1);
console.log(result1);
