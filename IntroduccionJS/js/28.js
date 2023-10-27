// Classes and prototypes

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    formatProduct() {
        return `The Product ${this.name} price is: $ ${this.price}`;
    }
}

const product2 = new Product('Curve Screen 49 inches', 800);
const product3 = new Product('Laptop', 1000);

// Inheritance
class Book extends Product {
    constructor(name, price, isbn) {
        super(name, price);
        this.isbn = isbn;
    }
    formatProduct() {
        return `${super.formatProduct()} and its ISBN is ${this.isbn}`;
    }
}
const book = new Book('JavaScript 101', 200, '7984636457651'); 
console.log(book.formatProduct() );
console.log(product2.formatProduct() );

