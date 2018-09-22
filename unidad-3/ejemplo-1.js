/*Esto es la declaracion de una variable
*/
var title = document.querySelector('h1');
title.addEventListener('click', updateName);

//Esto es una funcion

function updateName() {
    var name = prompt('Nombre del jugador');
    title.textContent = 'jugador 1:' + name;
}

