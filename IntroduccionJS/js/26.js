// This 

const reservation = {
    name: 'Clau',
    lastname: 'Mendez',
    total: 5000,
    paid: false,
    information: function() { //it refers of object properties
        console.log(`Client ${this.name} reserved and total paid is ${this.total}`);
    } 
}

const reservation2 = {
    name: 'Paul',
    lastname: 'Mendez',
    total: 5000,
    paid: false,
    information: function() {
        console.log(`Client ${this.name} reserved and total paid is ${this.total}`);
    } 
}

reservation.information();
reservation2.information();