/*Criar 6 arrays, dividindo 36 pessoas nele
Vamos usar o RANDOM para sortear as pessoas dentro dele. 
Tomar cuidado para que uma pessoa não seja sorteada em 2 grupos */


var aluno = [];
var grupo = [];



for(i=0; i<6; i++){
    grupo[i] = [];
}


preencherAlunos();

for(let i=0; i<36; i++){
    preencherGrupo(grupo[i]);
    console.log(grupo[i]);
}


function preencherAlunos(){
    for(i=0; i<36; i++){
        nomes=prompt("Informe o nome" +(i+1) );
        aluno.push(nomes);

    }

}

function preencherGrupo(grupo){
    for(let i=0; i<6; i++){
        sorteado = Math.round(Math.random()*(aluno.length-1));
        grupo.push(aluno[sorteado]);
        aluno.splice(sorteado, 1);
    }
}


 






