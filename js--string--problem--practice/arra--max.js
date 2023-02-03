function maxInArray(height) {
    let largest = height[0];
    for (let i = 0; i < height.length; i++) {
        const index = i;
        const elements = height[index];
        console.log(elements);
        if (elements > largest) {
            largest = elements;
        }
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('The tallest person is', tallest);








function findLowest(heights) {
    let smallest = heights[0];
    for (let i = 0; i < heights.length; i++){
        const elements = heights[i];
        if(smallest > elements){
            smallest = elements;
        }
    }
    return smallest;
}


const heights1 = [167, 190, 137, 120, 165];
const smallestNumber = findLowest(heights1);
console.log('The smallest person is ', smallestNumber);