

const loggedUser = new Promise( (resolve, reject) => {
    const logged = true;

    if (logged) {
        resolve('User logged'); // Achieved Promise
    } else {
        reject('Try again'); //Unachieved Promise
    }
});

loggedUser
    .then (result => console.log(result))
    .catch (error => console.log(error));

// 3 values with Promises
   // *Pending: Still waiting
   // *Fulfilled: Promise Achieved
   // *Rejected: Promise Unachieved
