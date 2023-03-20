// Normal function also get hoisted while arrow function does not. In arrow function if does not matter if it is used const let or var it will not be hoisted.


print5()

// print10()

// print12()

for (var i = 0; i<5; i ++){
    console.log(i);
}
console.log('outside', i);

function print5 (){
    console.log(5)
}

// Normal function 
function print5 (){
    console.log('inside print5', 5)
}


const print10 =() => {
    console.log('inside print 10', 10)
}


var print12 =() => {
    console.log('inside print 12', 12)
}