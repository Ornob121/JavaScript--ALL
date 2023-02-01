const myInches = 12;
const myFeet = myInches /12;
console.log('My feet', myFeet);


function height (inches){
    const feet = inches/12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = height(dadaInches);
console.log('Dada Feet', dadaFeet);


function milesToKilometer(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}

const twoMiles = 2;
const inKilometer = milesToKilometer(twoMiles);
console.log(inKilometer);