/*
(1) Faça um programa que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias.
*/






var anos = prompt("Qual o número de anos? ");
anos = Number(anos);

var meses = prompt("Qual o número de meses? ");
meses = Number(meses);

var dias = prompt("Qual o número de dias? ");
dias = Number(dias);

var total =Math.floor(anos*365.25+meses*30+dias);
var mesesRestantes = ((anos*365.25+meses*30+dias) - Math.floor(anos*365.25+meses*30+dias))*12;
console.log("Meses restantes: " + mesesRestantes)
console.log(total);