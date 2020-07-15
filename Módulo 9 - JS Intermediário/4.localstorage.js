// localStorage.setItem --> ARMAZENA
// localStorage.getItem --> USA 
// localStorage.removeItem --> REMOVE

// onload = function () {
//     let nome = localStorage.getItem("nome");
//     let h1 = document.getElementById("nome");
//     h1.innerHTML = nome;
// }

// function atualizar(element) {
//     let valor = element.value;
//     console.log(valor) 
    
//     let h1 = document.getElementById("nome");
//     h1.innerHTML = valor;
    
//     localStorage.setItem("nome", valor);
// }


// let a = { nome:"Igor", n1: 7.5}
// localStorage.setItem("aluno", JSON.stringify(a));

let a = localStorage.getItem("aluno");
console.log(JSON.parse(a));