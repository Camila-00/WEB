
// Aluno - Nota 1 - Nota 2 - Média - Aprovado/Reprovado

var nomes = ["Ígor", "José", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

function media(n1, n2) {
    return (n1 + n2)/2;
}

function passou(media) {
    if (media > 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

for (var index in nomes) {
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1, nota2);

    console.log(nomes[index] + 
            " - " + 
            nota1 + 
            " - " + 
            nota2 + 
            " - " +
            m + 
            " - " +
            passou(m));
}

//OBJETO

var aluno = { 
    nome:"Igor",
    notas: [8,9,7],
    media:"",
    familiares: [{
                        parentesco:"mae",
                        nome:"Maria",
                        idade:35,
                        end:"Rua tal tal"
                    },
                    {
                        parentesco:"pai",
                        nome:"João",
                        idade:37,
                        end:"Av. bla bla"
                    },
                    {
                        parentesco:"tia",
                        nome:"Carla",
                        idade: 21,
                        end:"Alameda não sei"
                    }
                    ]
    };
    // Calcular a média das notas
    var media = 0;
    for(var nota in aluno.notas)
    {
        media += aluno.notas[nota];
    }
    aluno.media = media/aluno.notas.length;
    
    aluno.matricula = 123456;
    console.log(aluno);



