
const mainButton = document.querySelector('#mainButton');
mainButton.addEventListener('click', () => {
    Notification.requestPermission()
    .then(result => console.log(`Result is ${result}`))
})


if(Notification.permission == 'granted') {
    new Notification('This is a notification', {
        icon: 'img/logo.png',
        body: 'notification code'
    })
}