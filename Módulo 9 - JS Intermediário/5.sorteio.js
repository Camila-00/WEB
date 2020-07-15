
let pessoas = ["Ígor", "Jose", "Marcos", "Pamela", "Camila"]

function sortear() {
    let numeroPessoas = pessoas.length;
    let numeroSorteio = Math.floor(Math.random() * numeroPessoas);
    // document.querySelector('#resultado').innerHTML = numeroSorteio;
    document.querySelector('#resultado').innerHTML = pessoas[numeroSorteio];
}