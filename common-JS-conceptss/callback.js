function greetings(greetingsHandlerFunction, name){
    greetingsHandlerFunction(name);
};

const name = 'Halim Mama'

function greetingsHandler (name){
    console.log('Hello there', name)
};

greetings(greetingsHandler, name);