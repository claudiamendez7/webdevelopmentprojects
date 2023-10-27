// OOP

// *Literal Object
const product = {
    name: 'Tablet',
    price: 500
}

// Constructor Object

function Client(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}
Client.prototype.formatClient = function () {
    return `The Client ${this.name} ${this.lastname}`;
}
function Product(name, price) {
    this.name = name;
    this.price = price;
}
// Creates functions that just use an specific object
Product.prototype.formatProduct = function () {
    return `The Product ${this.name} price is: $ ${this.price}`;
}

const product2 = new Product('Curve Screen 49 inches', 800);
const product3 = new Product('Laptop', 1000);
const client = new Client('Clau', 'Mendez');

console.log(product2);
console.log(product2.formatProduct());
console.log(product3.formatProduct());

