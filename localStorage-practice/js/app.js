document.getElementById('increase-btn').addEventListener('click', function(){
    let initialNumberField = document.getElementById('number');
    const initialNumberString = initialNumberField.innerText;
    let initialNumber = parseInt(initialNumberString);
    initialNumber++;
    initialNumberField.innerText = initialNumber
    localStorageValue(initialNumber)
});

const localStorageValue = (number) => {
    localStorage.setItem('value',number )
};

const displayFromLocalStorage = () =>{
    let value = 0;
   const localValue = localStorage.getItem('value');
   if(localValue){
    return localValue;
   }
   return value;
};

const displayFirst = () =>{
   const value = displayFromLocalStorage()
    document.getElementById('number').innerText = value
   console.log(value)
//    localStorage.clear()
}

displayFirst()