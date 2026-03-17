const prompt = require('prompt-sync')();

let valorHora = parseFloat(prompt("Digite o valor ganho ppor hora! R: "))
let horaExtra = parseFloat(prompt("Digite a quantidade de Horas Extras! R: "))
let calculo = (valorHora * 1.5) * horaExtra
console.log(`O valor total de horas extras é de R$${calculo}`)