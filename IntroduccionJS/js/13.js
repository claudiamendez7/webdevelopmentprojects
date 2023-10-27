// Spread operator

const product = {
    productName: "Tv Screen",
    price: 300,
    available: true
}

const measure = {
    weight: '1kg',
    heigh: '1m'
}

const newProduct = { ...product, ...measure};

console.log(product);
console.log(newProduct);