// Iterators
// For Loop

// for (let i = 0; i < 10; i++) {
//     const element = array[index];
    
// }

// for (let i = 1; i <= 100; i++) {
//     if (1 % 2 === 0) {
//         console.log(`El número ${i} es PAR`);
//     } else {
//         console.log(`El número ${i} es IMPAR`);
//     }    
// }

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

for (let i = 0; i < cart.length; i++) {
    console.log(cart[i].name);
}

//While loop
// let i =0; //index
// while ( i = 10) { //condition
//         console.log(`Desde el while loop`);

//         i++; //Increment
//     }
//Condition must be achieved

//Do while loop

let i = 100;

do {
    console.log(i);

    i++;
} while ( i < 10);
//condition might be not achieved