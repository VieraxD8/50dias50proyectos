const jokeEl = document.getElementById('joke');
const jokebtn = document.getElementById('jokebtn');


jokebtn.addEventListener('click', generateJoke);

generateJoke();

// Usamos Async/Await

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();

    
    jokeEl.innerHTML = data.joke;

} 

// con fech

/*
function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then( (data) => {
            jokeEl.innerHTML = data.joke;
        });
}
*/