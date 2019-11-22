/* COMPARANDO A NOTA DE 3 ALUNOS E MOSTRAR O MAIOR ENTRA ELAS
   MAIOR QUE 5 E O MENOR QUE 5 
*/


const MEDIA = 5;
//Objetos alunos

var aluno1 = {
	nome: "alan",
  nota : 3
};

var aluno2 = {
	nome: "pedro",
  nota: 5
};

var aluno3 = {
		nome: "Joaão",
    nota: 5
};

//array de alunos
var alunos = [aluno1, aluno2, aluno3];

var alunoMaiorNota;
var alunoMenorNota;
var alunoNotaAcimaCinco;

//for para os array

for(i=0; i<alunos.legth; i++){
	if(alunos[i].nota > MEDIA){
  	alunoNotaCimaCinco = aluno[i];
  }
  
  if(alunoMaiorNota == undefined){
  	alunoMaiorNota = alunos[i];
  }else{
  	if(alunos[i].nota < alunoMenorNota.nota){
    	alunoMenorNota = alunos[i];
    }
  }
}

console.log("aluno maior que media 5: " + JSON.stringify(alunoNotaAcimaCinco));
console.log("aluno menor nota:" + JSON.stringify(alunoMenorNota));
console.log("aluno maior nota:" + JSON.stringify(alunoMaiorNota));

