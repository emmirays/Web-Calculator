document.querySelector('.arrow_left').addEventListener('click', () => {
    document.querySelector('.signs_div').classList.toggle('show');
})

let input = document.querySelector('#input');
let btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;

        if (btnText == '×') {
            btnText = '*';
        }

        if (btnText == '÷') {
            btnText = '/';
        }
        
        if (btnText == '–') {
            btnText = '-';
        }

        input.value += btnText;
    })
}

// Sign_btn Functions
function backspace() {
    input.value = input.value.substr(0, input.value.length - 1);
}

function sin() {
    input.value = Math.sin(input.value);
}

function cos() {
    input.value = Math.cos(input.value)
}

function tan() {
    input.value = Math.tan(input.value)
}

function pi() {
    input.value = 3.14159265359;
}

function log() {
    input.value = Math.log(input.value);
}

function fact() {
    let i, number, x;
    x = 1
    number = input.value;
    for (i = 1; 1 <= number; i++) {
        x = x * i;
    }
    i = i - 1;

    input.value = x;
}

function root() {
    input.value = Math.sqrt(input.value, 2);
}

function e() {
    input.value = 2.71828182846;
}

function pow() {
    input.value = Math.pow(input.value, 2);
}