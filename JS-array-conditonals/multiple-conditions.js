// Multiple conditions.
var isGraduated = true;
var salary = 30000;
var car = 0;
car += 5;;
car -=5


if( isGraduated == true && salary > 20000 && car >= 1){
    console.log('You are successful.')
}
else{
    console.log('You are unsuccessful.')
}



if(isGraduated === true || salary > 60000 || car >= 2){
    console.log("You are ok.")
}
else{
    console.log('You are not ok.')
}


if(isGraduated === true && salary > 200000 || car >= 0){
    console.log('This one is the real one.')
}
else{
    console.log('You are not the real one.')
}