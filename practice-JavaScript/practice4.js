function foo(){
    console.log('foo');
    bar();
}

function bar(){
    console.log('bar');   
}
foo();


function Average(num1, num2, num3 ){
    console.log((num1 + num2 + num3) / 3)
}

// Average(57, 59, 58);

function oddEven(num){
    console.log('If the number can be divided by 2 without any reminder than it is an even number')
}


var color1 = 'red';
var color2 = 'yellow';
var color3 = 'green';

if(color1 == 'red'){
    console.log('If you try to cross the road you will be in danger.')
}
else if(color1 == 'yellow'){
    console.log('You should stop.')
}
else if(color1 = 'green'){
    console.log('You should cross the road.')
}
if(color2 == 'red'){
    console.log('If you try to cross the road you will be in danger.')
}
else if(color2 == 'yellow'){
    console.log('You should stop.')
}
else if(color2 = 'green'){
    console.log('You should cross the road.')
}
if(color3 == 'red'){
    console.log('If you try to cross the road you will be in danger.')
}
else if(color3 == 'yellow'){
    console.log('You should stop.')
}
else if(color3 = 'green'){
    console.log('You should cross the road.')
}






function namta13 (namta){
    for( var i = 1; i <= 10; i++){
        var namtaOf13 = namta * i;
        console.log(namtaOf13);
    }
}
namta13(13);

function myName(name1, name2, name3){
    var totalName = name1 + ' ' + name2 + ' ' + name3;
    console.log(totalName);
    return totalName;
}
var myFullName = myName('Shadman', 'Tahmid', "Ornob");
console.log(myFullName);

function borgo (number){
    var borgoOf = number * number;
    console.log(borgoOf);
}

borgo(5);

function boro (lala){
    var name = lala;
    console.log(name.toLowerCase());
}

boro('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')



const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'], 
    crust: 'deep dish', 
    serves: 2
}
console.log(pizza.toppings[2]);


var number = 8; 
if(number % 2 == 0){
    console.log('Than it is a even number.')
}
else{
    console.log('The number is odd.')
}
;

var number1 = 15;
if(number1 % 2 != 0){
    console.log('The number is odd')
}
else{
    console.log('The number is even');
}