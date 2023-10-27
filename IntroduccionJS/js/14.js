// Arrays

const numbers = [10,20,30,40,50];



// console.log(months); 

// access to arrays
// console.log(numbers[4]);
// console.log(numbers[2]);

// Extension
// console.log(months.length);

// months.forEach( function(month) {
//     console.log(months);
// });

//Add new elements

numbers.push(60, 70, 80); //at the end
numbers.unshift(-10, -20, -30); // at the beginning

console.table(numbers);

const months = ['January', 'February', 'March', 'April', 'May'];

// months.pop(); //deletes the last
// months.shift(); //deletes the first

// months.splice(2, 1);
// console.table(months);

// Rest operator or Spread operator

const newArray = ['June', ...months];
console.log(newArray);