const textEl = document.getElementById('text');
const speddEl = document.getElementById('speed');
const text = 'Nos encanta la programación'
let idx = 1;
let speed = 300 / speddEl.value;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx);

    idx++;

    if(idx > text.length){
        idx = 1;
    }

    setTimeout(writeText, speed);
}

speddEl.addEventListener('input', e => speed = 300 /e.target.value);