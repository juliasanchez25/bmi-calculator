const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        setResult('⚠ Peso inválido', false);
        return;
    }

    if (!height) {
        setResult('⚠ Altura inválida', false);
        return;
    }

    const bmi = getBMI(weight, height);
    const bmiLevel = getBMILevel(bmi);
    const msg = `Seu IMC é ${bmi} (${bmiLevel}).`;
    setResult(msg, true);
});

function getBMILevel(bmi) {
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2',
'Obesidade grau 3'];

    if (bmi >= 39.9) {
        return level['5'];
    } else if (bmi >= 34.9) {
        return level['4'];
    } else if (bmi >= 29.9) {
        return level['3'];
    } else if (bmi >= 24.9) {
        return level['2'];
    } else if (bmi >= 18.5) {
        return level['1'];
    } else if (bmi < 18.5) {
        return level['0'];
    }
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

    if (isValid) {
        p.classList.add('valid-result');
    } else {
        p.classList.add('invalid-result');
    }

    p.innerHTML = msg;
    result.appendChild(p);
}
