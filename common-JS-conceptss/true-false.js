/*
Truth:---
1.setting value to true is truth(const x = true;);

2. any number(positive or negative) is considered to be truth except 0;

3. Any string is considered to be true except empty string;

4. Empty object or full object is truth

5. Empty array or full array is truth
*/


// How to check truthy
var k = 2;
if(!!k){
    console.log('value is truthy')
}


/*
False:---
1.setting value to false is false(const y = false;);

2. 0 number is considered to be false;

3. Empty string is considered to be false('') without space ;

4. Undefined value is considered false;

5. Null value is considered false;
*/


// How to check falsy
const x = '';
if(!x){
    console.log('value is falsy')
}


const p = false;
if(p){
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy')
}



const y = 0;
if(y){
    console.log('value of y is truthy');
}
else {
    console.log('value of y is falsy')
}


const z = '';
if(z){
    console.log('value of z is truthy');
}
else {
    console.log('value of z is falsy')
}



let w;
if(w){
    console.log('value of w is truthy');
}
else {
    console.log('value of w is falsy')
}