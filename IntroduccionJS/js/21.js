// Arrow functions
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
months.forEach( month => {
    if(month == 'March') {
        console.log('March exists'); 
    }
});

let result;

result = cart.some(product => product.name === 'PS5');
  
result = cart.reduce((total, product) => total = product.price, 0);

result = cart.filter(product => product.price > 400);
result = cart.filter(product => product.name !='iPhone 15 pro');
  console.log(result);

const add2 = (n1, n2) => console.log(n1 + n2);
add2(5, 10);

const learning = it => console.log(`Learning ${it}`);

learning('JavaScript')

