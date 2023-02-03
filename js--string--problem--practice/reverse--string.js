function reverseString(string){
    let items = '';
    for (let i = string.length-1; i >= 0; i--){
        const index = i;
        const elements = string[index];
        items = items + elements;
        console.log(elements, items);
    }
    return items;
}

const myString = 'Hello how are you. I am fine by the way.';
const reversed = reverseString(myString);
console.log(reversed);










function wordReverse (word){
    const split = word.split(' ');
    let retword = '';
    for (let i = word.length-1; i >= 0; i--){
        const index = i;
        const elements = word[index];
        retword = retword + elements;
        console.log(elements, retword);
    }
    return retword;
}

const lala = 'I am a good boy';
const ret = wordReverse(lala);
console.log(ret);