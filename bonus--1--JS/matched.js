const numbers = [45, 65, 23, 98, 19];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

const products = [
    { id: 1, name: 'xiaomi phone', price: 16000 },
    { id: 1, name: 'Redmi phone', price: 16000 },
    { id: 1, name: 'lanovo phOne', price: 16000 },
    { id: 1, name: 'walton phone', price: 16000 },
    { id: 1, name: 'samsung phone', price: 16000 },
    { id: 1, name: 'realme phOne', price: 16000 },
    { id: 1, name: 'oppo phone', price: 16000 },
    { id: 1, name: 'dell laptop', price: 16000 },
    { id: 1, name: 'lenoveo lAptop', price: 16000 },
    { id: 1, name: 'nokea phone', price: 16000 },
    { id: 1, name: 'symphony phoNE', price: 16000 },
    { id: 1, name: 'i phOne', price: 16000 },
    { id: 1, name: 'onePlus phone', price: 16000 },
    { id: 1, name: 'macbook laptop', price: 16000 },
    { id: 1, name: 'vivo phOne', price: 16000 },
];

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const items = matchedProducts(products, 'laptop');
console.log(items);





function findLeapYear(arrOfYears){
  const newArray = [];
  for (let i = 0; i < arrOfYears.length; i++){
    const elements = arrOfYears[i];
    if(elements % 4 == 0){
      newArray.push(elements);
    }
  }
  return newArray;
}
const result = findLeapYear([2023,2024,2025,2028,2030]);
console.log(result);