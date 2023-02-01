function getAverage(assignment1, assignment2, assignment3){
    const average = (assignment1 + assignment2 + assignment3) / 3;
    return average;
}
var myAverage = getAverage(56, 59, 58);
myAverage = myAverage.toFixed(2);
var myAverage = parseFloat(myAverage);
console.log(myAverage);