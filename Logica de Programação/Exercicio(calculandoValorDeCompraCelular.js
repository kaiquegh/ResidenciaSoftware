//Escreva um programa que calcula o preço total da compra do seu celular. Você pode continuar comprando 
//telefones (dica: loop!) até você ficar sem dinheiro na sua conta bancária. Você irá também comprar 
//acessórios para cada telefone enquanto sua quantidade de dinheiro for menor do que seu limite mensal.
//Após calcular o valor da compra, adicione as taxas, depois imprima a quantidade total, devidamente formatada.
//Por fim, verifique o total gasto em sua conta bancária para saber se você pode comprar ou não.
//Você deve definir algumas constantes para a "taxa de imposto", "preço do telefone", "preço do acessório", 
//e "limite de gastos", assim como variáveis para o seu "saldo bancário".
//Você deve definir funções para calcular a taxa e para formatar o preço com um "$" e arredondá-lo 
//para duas casas decimais.
//Desafio Extra: Tente incorporar um input para esse programa, talvez com oprompt(..) que abordamos 
//anteriormente em "Input". Você pode definir um prompt para o usuário para definir o saldo de sua conta 
//bancária, por exemplo.



const acessorio = 20;
const taxa=0.2;
const saldoConta=5000;
var total=0;
var total1=0;



function taxaCompra(){
return total1=total+(total*0.2);}

function compraCelular(){
return total=total+Number(celular);}
function compraAcessorio()
{
	return total=total+20;
}

while(total<saldoConta){
	celular=prompt("Informe o valor do celular:");
	compraCelular();
	
sim=prompt("Quer comprar acessorio?");
	if(sim=='sim'){
		if(saldoConta>total)
		{
			compraAcessorio();
		}
    }

	taxaCompra();
	console.log("Comprando celular: " +total1);
}
	console.log("Acabou: " +total1);