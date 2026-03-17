const prompt = require('prompt-sync')();
let prova1 = parseFloat(prompt("Digite a nota da prova 1! R: "))
let prova2 = parseFloat(prompt("Digite a nota da prova 2! R: "))
let notas = [prova1,prova2]

let media = (notas[0] + notas[1]) /2
console.log(`A sua média é de ${media}`)



