//Array Methods
const months = ['January', 'February', 'March', 'April', 'May'];

const cart = [
    {name: '20 TV Screen', price: 500},
    {name: '50 TV Screen', price: 700},
    {name: 'Stereo', price: 200},
    {name: 'Tablet', price: 100},
    {name: 'PS5', price: 800},
    {name: 'Laptop 1T', price:  950},
    {name: 'iPhone 15 pro', price: 500},
    {name: 'Bluetooth Headphones', price: 250},
    {name: 'MP3', price: 80}
];

// ForEach
months.forEach(function(month) {
    if(month == 'March') {
       console.log(month); 
    }
});

// Includes
let result = months.includes('December');

// Some for array object
result = cart.some(product => product.name === 'PS5');

// Reduce
result = cart.reduce(function(total, product) {
    return total = product.price
});

// Filter
result = cart.filter(function(product) {
    return product.name ==='20 TV Screen'
});

console.log(result);