const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messeges = [

    'Mensaje uno',
    'Mensaje dos',
    'Mensaje tres',
    'Mensaje cuatro',
    'Mensaje cinco'
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(messege = null, type = null){

    const notif = document.createElement('toast');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = messege ? messege : getRandomMessage();

    toasts.appendChild(notif);

    setTimeout( () => {
        notif.remove()
    }, 3000);

}


function getRandomMessage() {
    return messeges[Math.floor(Math.random() * messeges.length)]
}


function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}

