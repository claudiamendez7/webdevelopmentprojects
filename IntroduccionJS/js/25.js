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

// ForEach // send elements to console, show results on HTML
cart.forEach( product => console.log(product.name ));

// Map //new arrays
const array2 = cart.map(product => `${product.name} - ${product.price}`);
