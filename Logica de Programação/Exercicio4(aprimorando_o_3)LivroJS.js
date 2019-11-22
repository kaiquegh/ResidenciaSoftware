n=prompt("Quantidade de alunos");

var alunos = [];


const MEDIA = 5;


var alunos = [];
//array de alunos
var alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];
var alunoMaiorNota;
var alunoMenorNota;
var alunoNotaAcimaCinco;
var notasMaioresCinco = [];
var notasMenoresCinco = [];

n=prompt("Quantidade de alunos");

for (i=0; i<n; i++){
	var newAluno = {};
	newAluno.nome = prompt("Digite o nome do" +(i+1) +"aluno");
	newAluno.nota = prompt("Digite a nota do" +newAluno.nome);
	aluno[i] = newAluno;
}

//Objetos alunos fazendo soma somantota == alunos[i]+nota;
/*var aluno1 = {
    nome: "alan",
    nota: 3
};
var aluno2 = {
    nome: "pedro",
    nota: 5
};

var aluno3 = {
    nome:"joão",
    nota:10
};

var aluno4 = {
    nome:"Mrcos",
    nota: 7
};

var aluno5 = {
    nome:"Kaique",
    nota: 8
};*/




//fazer for do array 
for(i=0;i<alunos.length;i++){
    if(alunos[i].nota > MEDIA) {
        alunoNotaAcimaCinco = alunos[i];
    }

    if (alunoMaiorNota == undefined){
        alunoMaiorNota = alunos[i];
    }else{
        if (alunos[i].nota > alunoMaiorNota.nota){
            alunoMaiorNota = alunos[i];
        }
    }

    if (alunoMenorNota == undefined){
        alunoMenorNota = alunos[i];
    }else{
        if (alunos[i].nota < alunoMenorNota.nota){
            alunoMenorNota = alunos[i];
        }
    }
}



for(i=0; i<alunos.length; i++){
    if(alunos[i].nota > MEDIA){
        notasMaioresCinco[notasMaioresCinco.length] = alunos[i]; 
    }
    else if(alunos[i].nota < MEDIA){
        notasMenoresCinco[notasMenoresCinco.length] = alunos[i];
    }
}



console.log ("aluno maior que media 5: " + JSON.stringify(alunoNotaAcimaCinco));
console.log("aluno menor nota: " + JSON.stringify(alunoMenorNota));
console.log("aluno maior nota: " + JSON.stringify(alunoMaiorNota));


//IMPRIMINDO OS ARRAYS COM ALUNOS ACIMA DA MEDIA E ABAIXO DA MAEDIA
console.log("Alunos acima da media: " +JSON.stringify(notasMaioresCinco));
console.log("Alunos abaixo da media: " +JSON.stringify(notasMenoresCinco));
    
