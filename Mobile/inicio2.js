let pessoas = [
    {nome:"Joao", idade: 23, autorizado: false},
    {nome:"Pedro", idade: 17, autorizado: false},
    {nome:"Maria", idade: 20, autorizado: false},
    {nome:"Mariana", idade: 15, autorizado: false}
];

function preencherAutorizacao(pessoas){
    return pessoas.map((pessoa) =>  {
        if(pessoa.idade >= 18){
            pessoa.autorizado = true; 
        }
        return pessoa
    })
}
let pessoas2 = preencherAutorizacao(pessoas);
console.log(pessoas2);