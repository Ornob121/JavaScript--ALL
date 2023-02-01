var shoppingCart = {
    meat:'5kg', 
    chips:5, 
    pen:12, 
    notebook:2, 
    chocolate:12, 
    drinks:12
}

console.log(shoppingCart);
console.log(shoppingCart['chocolate']);
var keys = Object.keys(shoppingCart);
var values = Object.values(shoppingCart);

for (var i = 0; i < keys.length; i++){
    console.log(keys[i]);
    console.log(values[i]);
}
