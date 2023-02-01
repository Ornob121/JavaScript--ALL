for ( var i = 0; i < 20; i++){
    
    if(i > 10){
        continue;
    }  
    console.log(i);
}

var numbers = [20, 30, 25, 90, 110, 54, 22, 33, 445, 336, 36, 51, 50];

for( var i = 0; i < numbers.length; i++){
    if(numbers > 50){
        continue;
    }
    var number = numbers[i];
    console.log(number);
}

