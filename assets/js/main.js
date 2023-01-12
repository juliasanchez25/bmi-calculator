const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        setResult('Peso inválido', false);
        return;
    }

    if (!height) {
        setResult('Altura inválida', false);
        return;
    }

    const bmi = getBMI(weight, height);

    console.log(bmi);
});

function getBMILevel(bmi) {
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2',
'Obesidade grau 3'];
}

function getBMI(weight, height) {
    const bmi = weight / height ** 2;
    return bmi.toFixed(2);
}

function createP() {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid) {
    const result = document.querySelector("#result");
    result.innerHTML = '';

    const p = createP();
    p.innerHTML = msg;
    result.appendChild(p);
}
