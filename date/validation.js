const number = 12;
if(typeof number === 'number'){
    console.log('value is number');
}
else{
    console.log('value is not number')
}

const numbers = [20, 30, 80, 061, 40, 25, 85];
console.log(Array.isArray(numbers));


const num = '22';
console.log(isNaN(num))
// isNaN = is Not a Number.
if(isNaN(numbers)){
    console.log('is not a number')
}
else{
    console.log('is a number')
}