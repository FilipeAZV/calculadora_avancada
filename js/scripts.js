// Váriaveis de escupo global
var num1;
var num2;
var operador;


// Pega o valor da tecla
function pegarValorTecla(valor) {
    // Reproduz o som da tecla
    tocarSom();

    document.getElementById('display').innerHTML = valor;
}

// function pegarOperador {

// }

// function calcular {

// }



// Reproduz o som da tecla
function tocarSom() {
    var blip = document.getElementById('blip');

    blip.volume = 1;
    blip.play();
}