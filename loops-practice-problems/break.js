for(var i = 1; i <= 20; i++){
    if(i < 5){
        break;
    }
    console.log(i);
}

var roastGiven = 0;
while(roastGiven <= 10 ){
    console.log('Here you go sir. This is for you.');
    roastGiven += 1;
    if(roastGiven > 4){
        break;
    }
}