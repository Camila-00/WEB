let inputAdultos = document.querySelector("#adultos")
let inputCriancas = document.querySelector("#criancas")
let inputDuracao = document.querySelector("#duracao")

let resultado = document.querySelector("#resultado")

function calcular() {
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let carneTotal = carnePessoa(duracao) * adultos + ((carnePessoa(duracao)/2) * criancas)
    let bebidaTotal = bebidaPessoa(duracao) * adultos + ((bebidaPessoa(duracao)/2) * criancas)
    let cervejaTotal = cervejaPessoa(duracao) * adultos

    resultado.innerHTML = `<p>${carneTotal/1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${bebidaTotal/1000}L de Bebidas</p>`
    resultado.innerHTML += `<p>${cervejaTotal/1000}L de Cerveja</p>`
    
}

function carnePessoa(duracao) {
    if(duracao >=6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPessoa(duracao) {
    if(duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidaPessoa(duracao) {
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}