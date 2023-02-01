function oddEven(number){
    if(number % 2 == 0){
        console.log("The number is even.");
        return true;
    }
    else{
        console.log("The number is odd.");
        return false;
    }
}

let number1 = 8;
const result1 = oddEven(number1);
console.log(result1);

let number2 = 17;
const result2 = oddEven(number2);
console.log(result2);