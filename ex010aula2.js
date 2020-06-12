/*Construa um programa que calcule o preço a pagar pela energia
elétrica. O programa deve receber a quantidade de KWh
consumidas e o tipo de instalação (R para residências; I para
indústrias; C para comércios). O programa deve calcular o valor
conforme a tabela abaixo*/

let = parseInt(window.prompt("Digite a quantidade de KWh:" {value_KWh}));

value_KWh = 0;
instalation_type = '';
R = residencia;
I = industria;
C = comercial;


if
    (instalation_type = R && value_KWh <= 500) {
    price = 0,40*value_KWh
    }
    else {
    price = 0,65*value_KWh
    }
if
    (instalation_type = C && value_KWh <= 1000) {
    price = 0,55*value_KWh
    }
    else {
    price = 0,60*value_KWh
    }
if
    (instalation_type = I && value_KWh <= 5000) {
    price = 0,55*value_KWh
    }
    else {
    price = 0,60*value_KWh
    }


