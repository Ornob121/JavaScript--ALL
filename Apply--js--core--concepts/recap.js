// 1. Variable.
var name = 'Shadman';
/* Math operation: +, -, *, / */
/* Shorthand: +=, -=, *=, /= */
/* ++ , --*/


//array
var friends =['abul', 'babul', 'cabul', 'dabul', 'ebul'];

console.log(friends.length);
console.log(friends[3]);
friends[3] = 'kabul';
console.log(friends);
console.log(friends.indexOf('babul'));



// 3. Conditionals
// >, <, >=, <=, ==, !=
if(friends.length < 2){
    console.log('fokir tor friend nai.');
}
else{
    console.log('Tui lucky');
}




//Loop.
var number = 0;
while(number <= 6){
    console.log(number);
    number++;
}

for(var i = 0; i <= 10; i++){

}




// function.
function isMoonUp(time){
    if (time > 7){
        return true;
    }
}

var isIt = isMoonUp(8);

