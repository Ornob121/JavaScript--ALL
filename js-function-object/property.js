var shoppingCart = {
    meat:'5kg', 
    chips:5, 
    pen:12, 
    notebook:2, 
    chocolate:12, 
    drinks:12
}

console.log(shoppingCart);

// When you a specific property name than use dot to get the property value.
console.log(shoppingCart.meat);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);



// set property values.
shoppingCart.meat = '10kg';
console.log(shoppingCart);
// other wat to set property values.
shoppingCart['meat'] = '20kg';
console.log(shoppingCart);