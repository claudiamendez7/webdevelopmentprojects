//Objects 2

const product = {
    productName: "Tv Screen",
    price: 300,
    available: true
}
// const productPrice = product.price;
// const productName = product.productName;

//  console.log(productPrice);
//  console.log(productName);

//  Destructuring 

const {price, productName} = product;

console.log(price);
console.log(productName);