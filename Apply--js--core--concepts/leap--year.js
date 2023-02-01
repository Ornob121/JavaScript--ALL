function leapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log(year, 'Is a leap year')
        return true;
    }
    else{
        console.log(year, "Is not a leap year");
        return false;
    }
}

const year1 = 2012;
const isLeapYear = leapYear(year1);
console.log(isLeapYear);