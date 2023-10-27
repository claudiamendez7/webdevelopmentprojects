// "use strict"; //run strict JS mode
//Methods

const product = {
    productName: "Tv Screen",
    price: 300,
    available: true
}
// Object.freeze(product);
Object.sealed(product); //.freeze do not edit .seal allows to add

product.image = 'image.jpg';

// console.log(Object.isFrozen(product));
// console.log(Object.isSealed(product));

console.log(product);