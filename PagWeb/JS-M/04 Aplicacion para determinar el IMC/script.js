function calculateIMC() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight !== '' && height !== '') {
        var bmi = weight / ((height / 100) ** 2);
        var result = document.getElementById('result');
        result.innerHTML = 'Tu IMC es: ' + bmi.toFixed(2);

        // Clasificación del IMC
        if (bmi < 18.5) {
            result.innerHTML += ' - Bajo peso';
        } else if (bmi < 25) {
            result.innerHTML += ' - Peso normal';
        } else if (bmi < 30) {
            result.innerHTML += ' - Sobrepeso';
        } else {
            result.innerHTML += ' - Obesidad';
        }
    }
}