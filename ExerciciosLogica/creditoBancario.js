const prompt = require('prompt-sync')();

let salario = parseFloat(prompt("Digite seu salário liquido! R: "))
let parcela = parseFloat(prompt("Digite o valor da sua parcela! R:"))
let restricao = prompt("O cliente possui restrição no nome? (s/n)").toUpperCase()

let calculo = salario / 0.30

if(parcela <= calculo && restricao =="n"){
    console.log("Cŕedito aprovado!")
} else{
    console.log("Cŕedito negado: Parcela acima do limite ou restrição no CPF!")
}

