function sum (number){
    if (number == 1){
        return 1;
    }
    return number + sum(number - 1);
}

const result = sum(5);
console.log(result)


// number + sum(number - 1)
// 5 + number + sum(number - 1)
// 5 + 4 + number + sum(number - 1)
// 5 + 4+ 3 + number + sum(number - 1)
// 5 + 4 + 3 + 2 + number + sum(number - 1) --->> Here condition turned true so it will only return 1 and next 
//
// 5 + 4 + 3 + 2 + 1 will be the result
