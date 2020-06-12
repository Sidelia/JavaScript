/*Estruturas aninhadas. EX. Contextualização: Construa um programa que leia a categoria de um produto e determine o preço, 
conforme a tabela abaixo:*/

let a = parseInt(window.prompt("Digite a categoria:"));
preco = 0;

if (a == 1)
{
    preco = 10;
}
if (a == 2)
{
    preco = 18;
}
if (a == 3)
{
    preco = 23;
}
if (a == 4)
{
    preco = 26;
}
if (a==5)
{
    preco 31;
}
alert ("O valor do produto é: " +preco.tolocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));