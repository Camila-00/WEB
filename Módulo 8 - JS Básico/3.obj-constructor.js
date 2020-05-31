// ############Função construtora###############

function aluno(nome, n1, n2) {

    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function () {
        return  (this.nota1 + this.nota2) /2;
    }
}

var a = new aluno("Ígor", 9, 6)

console.log(a.media());

// #########################################################

// ########Aqui a função retorna um objeto#######

// function criarAluno(nome, n1, n2) {
//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function () {
//             return (this.nota1 +this.nota2) / 2;
//         }
//     }
// }

// var turma = [
//    criarAluno("Ígor", 9, 6),
//    criarAluno("João", 7, 4),
//    criarAluno("Marcela", 8, 7)

// ]

// for (var aluno of turma) {
//     console.log(aluno.nome + " - " + aluno.media());
// }

// ############### Substitui o "for" tradicional #########

// turma.forEach(function(elemento) {
//     console.log(elemento);
// })

// ####################################################
