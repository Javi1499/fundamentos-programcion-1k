var btnsumar = document.querySelector("#sumar");
console.log(btnsumar);
btnSumar.addEventListener('click', sumar);

function sumar() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number (inputNumero1.value) + Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}

var btnCalcular = document.querySelector("#restar");
console.log(btnRestar);
btnRestar.addEventListener('click', sumar);

function restar() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number (inputNumero1.value) - Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}