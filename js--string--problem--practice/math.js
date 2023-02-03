const result = Math.pow(10, 8);
const speed = 3;
const result1 = speed * result;
console.log(result1);



const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);

if(Math.abs(num1 - num2) < 5){
    console.log('you guys can be friends.')
}
else{
    console.log('You guys cannot be friends.')
}



// doshomik er por 5 er kom thakle number round figure hoia coto hoia jaibo. 
// mane jodi 8.4545 thake taile 7 hoia jaibo
const number1 = 8.4545;
console.log(Math.round(number1));


// kintu jodi 5 er beshi ba soman number doshomik er por thake thaile number round figure hoia boro hoia jaibo mane 9.5959 hoia jaibo 10.
const number2 = 9.5959;
console.log(Math.round(number2));





// Ami nije chaile convert howa number ke coto ba boto korte pari.   Boro korar jonno (((Math.ceil() )))  ebong coto korar jonno (((Math.floor()  ))) use korte hobe.
  
console.log(Math.ceil(5.44));


console.log(Math.floor(7.5959));




for ( let i = 0; i < 20; i ++){
    console.log(Math.random()*100);
}