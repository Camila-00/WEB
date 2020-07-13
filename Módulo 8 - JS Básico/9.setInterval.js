function mudarTexto() {
    let novoTexto = document.querySelector("h1")
    novoTexto.innerHTML = "Texto Modificado"
}

function trocarCor() {
    let trocaCor = document.querySelector("h1")
    trocaCor.style.color = "crimson"
}

function mudarCor() {
    let novaCor = document.querySelector("h1")
    novaCor.style.color = "blue"
    setTimeout(trocarCor, 3000)
}

var numero = 0;
var intervalo;
function contagem() {
    let numeroInicial = document.querySelector("#contador")
    numeroInicial.innerHTML += " " + numero;
    numero++;
}

function iniciarContagem() {
    intervalo = setInterval(contagem, 1000)
}

function pararContagem() {
    clearInterval(intervalo);
}