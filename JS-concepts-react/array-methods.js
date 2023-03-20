const products = [
    {name: 'laptop', price: '32000', brand: 'lenovo', color: 'silver'},
    {name: 'Phone', price: '132000', brand: 'iPhone', color: 'golden'},
    {name: 'watch', price: '2000', brand: 'casio', color: 'black'},
    {name: 'camera', price: '3000', brand: 'canon', color: 'white'},
    {name: 'tablet', price: '12000', brand: 'samsung', color: 'blue'},
];

const brands = products.map(x => x.brand)
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

products.forEach(product => console.log(product.name))

// filter

const chip = products.filter(product => product.price < 5000);
console.log(chip);

const containWord = products.filter(product => product.name.includes('a'));
console.log(containWord)
const containWordOne = products.find(product => product.name.includes('a'));
console.log(containWordOne)