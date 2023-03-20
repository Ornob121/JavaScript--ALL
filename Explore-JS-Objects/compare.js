const first = {
    a:2, 
    b:3, 
    c:4, 
    d:9
};
const second = {
    b:3, 
    a:2, 
    d:5,
    c:4, 
};

function compareObjects (first, second){
    const firstKeys = Object.keys(first)
    const secondKeys = Object.keys(second)
    if(firstKeys.length === secondKeys.length){
        for(const keys of firstKeys && secondKeys){
            // console.log(keys, first[keys])
            // console.log(keys, second[keys])
            if(first[keys] === second[keys]){
                return true;
            }
            else{
                return false;
            }
        }
    }
    else{
        return false;
    }
}

const result = compareObjects(first, second)
console.log(result)
