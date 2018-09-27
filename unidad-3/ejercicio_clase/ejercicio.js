var btnsumar = document.querySelector("#sumar");
console.log(btnsumar);
btnsumar.addEventListener('click', sumar);

function sumar() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number (inputNumero1.value) + Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}


var btnrestar = document.querySelector("#restar");
console.log(btnrestar);
btnrestar.addEventListener('click', restar);

function restar() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number (inputNumero1.value) - Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}


var btnmultiplicar = document.querySelector("#multiplicar");
console.log(btnrestar);
btnmultiplicar.addEventListener('click', multiplicar);

function multiplicar() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number (inputNumero1.value) * Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}

var btndividir = document.querySelector("#dividir");
console.log(btndividir);
btndividir.addEventListener('click', dividir);

function dividir() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number (inputNumero1.value) / Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}


var btnresiduo = document.querySelector("#residuo");
console.log(btnresiduo);
btnresiduo.addEventListener('click', residuo);

function residuo() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number (inputNumero1.value) % Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}