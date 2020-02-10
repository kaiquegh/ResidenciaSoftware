/*//REST PARAMENTERS

//quando não sabemos o tamanho usamos ...
function sum(...numbers){
    let result = 0;
    numbers.forEach((numbers) => {
        result += numbers
    });
}


//DIFERENÇAS ENTRE ARRON FUNCTIONS E FUNCTIONS
*/
const pessoas = [
    { nome: "Joao", idade: 23},
    { nome: "Pedro", idade: 17},
    { nome: "Maria", idade: 20},
    { nome: "Mariana", idade: 15},
];

const pessoasMenores = [];
const pessoasMaiores = [];

pessoas.forEach((pessoa) => {

if(pessoa.idade < 18){
    pessoasMenores.push(pessoa);

}else{
    pessoasMaiores.push(pessoa);
}
});
console.log(pessoasMaiores);
console.log(pessoasMenores);

