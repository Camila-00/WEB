
var aluno = {
    nome: "Ígor",
    notas: [7, 8],
    media: function (n1, n2) {
        return (n1 + n2) /2;
    }
}

console.log(aluno.nome);
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

// #################################################

function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno1 = {
    nome: "Ígor",
    notas: [9, 8],
    media: calcMedia
}

var aluno2 = {
    nome: "João",
    notas: [5, 8],
    media: calcMedia
}

console.log(aluno1.nome);
console.log(aluno1.media());

console.log(aluno2.nome);
console.log(aluno2.media());