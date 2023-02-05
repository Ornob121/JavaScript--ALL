const shoppingCart = [
    { name: 'shirt', price: 2200, quantity: 2 },
    { name: 'shoe', price: 1200, quantity: 5 },
    { name: 'belt', price: 600, quantity: 4 },
    { name: 'pant', price: 3700, quantity: 3 },
];


function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = (sum + product.price)* product.quantity;
        console.log(product);
    }
    return sum;
}

const totalExpense = totalCost(shoppingCart);
console.log(totalExpense);