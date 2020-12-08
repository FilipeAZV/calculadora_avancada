// Váriaveis de escupo global
var num1 = "";
var num2 = "";
var operador = "";

// Pega o valor da tecla
function pegarValorTecla(valor) {

    // Reproduz o som da tecla
    tocarSom();
    document.getElementById('display').innerHTML = valor;
    console.log("1. pegarValorTecla");

    // Verifica se o operador tem valor
    if (operador == "") {
        num1 = num1 + valor;
        // num1 += valor; //o mesmo sentido que o de cima  
        atualizarDisplay(num1);
        console.log("1.1 operador vazio");

    } else {
        num2 = num2 + valor;
        atualizarDisplay(num2);
        console.log("1.2 operador vazio");
    }

}
// Pega o operador
function pegarOperador(sinal) {
    tocarSom();
    console.log("2. Pegar operador");

    //Verifica se o primeiro valor foi informado
    if (num1 != "") { // SE o num1 for diferente de vazio 

        console.log("2.1 num1 atribui");

        // Se o segundo valor NÃO for informado
        if (num2 == "") {
            operador = sinal;
            atualizarDisplay(num1 + sinal);
            console.log("2.2 num2 em branco");

        } else {
            // Faz o cálculo 
            calcular();

            console.log("2.3 calcular");
        }
    }
}

function calcular() {
    // convertes os valores para float (decimal)
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Guarda o resultado
    var resultado = "";

    // Verifica o sinal informado 
    if (operador == "+") {
        resultado = num1 + num2;

    } else if (operador == "-") {
        resultado = num1 - num2;

    } else if (operador == "*") {
        resultado = num1 * num2;

    } else if (operador == "/") {
        resultado = num1 / num2;

    } else if (operador == "%")
        resultado = (num1 / 100) * num2;

    // Limpa o conteúdo das variaveis e atualiza o display
    limpar()
    atualizarDisplay(resultado);
}

// Atualiza o display
function atualizarDisplay(valor) {
    document.getElementById('display').innerHTML = valor;
}

// Limpar
function limpar() {
    tocarSom();
    num1 = "";
    num1 = "";
    operador = "";
    atualizarDisplay(0);
}

// Reproduz o som da tecla
function tocarSom() {
    var blip = document.getElementById('blip');

    blip.volume = 1;
    blip.play();
}

// Exemplo de estrutura condicional IF ELSE (SE SENÃO)
/*function verificarIdade(idade) {
    var idade = document.getElementById('idade').value;

    // Verifica se a idade é maior ou igual a 18
    
    // SE (Condição for verdadeira) FAÇA
    // Mostre("Texto 1")

    // SE NÃO FAÇA 
    // Mostre("Texto 2")
    

    if (idade >= 18) {
        alert("Maior");

    } else {
        alert("Menor");
    }

}*/