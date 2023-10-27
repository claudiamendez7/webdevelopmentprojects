// function add (n1, n2) {
//     return n1 + n2;
// }
// const result = add(2, 4);
// console.log(result);

let total =0;

function addCart(price) {
    return total += price;
}
function taxCalculate (total) {
    return 1.15 * total;
}

total = addCart(200); 
total = addCart(400); 
total = addCart(600); 

console.log(total);

const totalPrice = taxCalculate(total);
console.log(`Total price with taxes is: $${totalPrice}`);