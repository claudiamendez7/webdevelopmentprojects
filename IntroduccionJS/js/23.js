// Switch

const payMethod = 'cash'

switch (payMethod) {
    case 'card':
        console.log('Paid with card');
        break;
    case 'check':
        console.log('Payment pending');
        break;
    case 'cash':
        console.log('Paid with cash');
        break;
    default:
        console.log('Still not paid');
        break;
}