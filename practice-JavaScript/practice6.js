// This is problem 1
function minimum (numbers){
    let minNumber = numbers[0];
    for(let i = 0; i < numbers.length ; i ++){
        const elements = numbers[i];
        if(elements < minNumber){
            minNumber = elements;
        }
    }
    return minNumber;
}

const num = [2030, 554, 879, 464, 4536, 8045, 979];
const num1 = minimum(num);
console.log(num1);



// This is problem 2
function mini (number1, number2, number3){
    return Math.min(number1, number2, number3);
}


const number = mini(460, 764, 786);
console.log(number);




// This is problem 3
function ara (arra){
    let add = 0;
    for(let i = 0; i < arra.length; i++){
        const element = arra[i];
        add = add + element;
    }
    let avg = add / arra.length;
    let avra = avg.toFixed(2);
    return parseFloat(avra);
}

const arrar = [20, 30, 64, 90, 80, 70, 60, 34, 64, 90, 70, 056, 64, 15, 35, 87, 64, 13, 604, 40, 978];
const average = ara(arrar);
console.log(average);


if(typeof average == number){
    console.log('This is a number');
}
else{
    console.log('This is a string');
}

let number50 = '50.50';
number50 = parseFloat(number50);
console.log(number50);

if(typeof number50 == number){
    console.log('This is a number');
}
else{
    console.log('This is a string');
}