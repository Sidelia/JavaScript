/*Estruturas aninhadas. EX. Contextualização: Construa um programa que leia a categoria de um produto e determine o preço, 
conforme a tabela abaixo:*/

let a = parseInt(window.prompt("Digite a categoria:"));
preco = 0;

switch (a) {
    case 1:
    preco = 10;
    break;

    case 2:
    preco = 18;
    break;

    case 3:
    preco = 23;
    break;

    case 4:
    preco = 26;
    break;

    case 5:
    preco = 31;
    break;


}
alert ("O valor do produto é: " +preco.tolocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));