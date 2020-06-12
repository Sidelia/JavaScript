/*Desenvolva um programa que leia a altura (em metros) e o peso (em
quilogramas) e calcule o IMC - Índice de Massa Corporal do usuário e
informe sua situação corporal conforme tabela abaixo. O cálculo do IMC
é feito dividindo-se o peso pela altura ao quadrado. Sabe-se ainda que a
tabela abaixo é válida apenas para pessoas acima dos 15 anos de idade,
então o programa deverá invalidar os cálculos que fujam dessa regra.*/

let years_ago = parseInt(window.prompt("Digite a idade do paciente:"));
let height = parseInt(window.prompt("Digite a altura do paciente:"));
let weight = parseInt(window.prompt("Digite o peso do paciente:"));

years_ago <= 15
height = 0;
weight = 0;
IMC = weight / Math.pow(height, 2);

if (IMC < 17){
    window.alert("Muito abaixo no peso.")
}

if(IMC = (17) && <= (18,49)){
    window.alert("Abaixo do peso.")
}

if(IMC = (18,5) && <= (24,99)){
    window.alert("Peso normal.")
}

if(IMC = 25 && <= 29,99){
    window.alert("Acima do peso.")
}

if (IMC = 30 && <= 34,99){
    window.alert("Obesidade I")
}

if (IMC = 35 && <= 39,99){
    window.alert("Obesidade II (severa)")
}

if (IMC >= 40){
    window.alert("Obesidade III (móbida)")
}

