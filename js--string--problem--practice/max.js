const jim = 84;
const della = 75;
if (jim > della) {
    console.log('Jim will get the cake')
}
else {
    console.log('della will get the cake');
}

const dela = 99;
const chinku = 77;

if (jim > dela && jim > chinku) {
    console.log('Jim will get the cake.')
}
else if (dela > jim && dela > chinku) {
    console.log('dela will get the cake.')
}
else if (chinku > dela && chinku > jim) {
    console.log('Chinku will get the cake.')
}



function max(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log('The max number is', num1);
    }
    else if (num2 > num1 && num2 > num3) {
        console.log('The max number is', num2);
    }
    else if (num3 > num2 && num3 > num1) {
        console.log('The max number is', num3);
    }
    return Math.max(num1, num2, num3);
}

let number = max(20, 31, 14);
console.log(number);





function min(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}
const result = min(3050, 8050, 9564);
console.log(result);