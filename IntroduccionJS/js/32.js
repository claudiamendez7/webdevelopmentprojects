// Async / Await

function downloadNewClients () {
    return new Promise (resolve => {
        console.log('Downloading clients... wait...');

        setTimeout(() => {
            resolve('Clients downloaded');
        }, 5000);


    });
}

function downloadLastOrders () {
    return new Promise (resolve => {
        console.log('Downloading orders... wait...');

        setTimeout(() => {
            resolve('Orders downloaded');
        }, 3000);


    });
}

async function app() {
    try {
        // const clients = await downloadNewClients();
        // const orders = await downloadLastOrders();
        // console.log(clients);
        // console.log(orders);
        const result = await Promise.all( [downloadNewClients(), downloadLastOrders()] );
        console.log(result [0]);
        console.log(result [1]);
    } catch (error) {
        console.log(error);
    }
}

app();


// setTimeout(function() {
//     console.log('set timeout...')
// }, 3000);

// setInterval(function() {
//     console.log('set timeout...')
// }, 3000);
