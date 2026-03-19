const prompt = require('prompt-sync') ();

let nota1 = parseFloat(prompt("Qual a sua nota da primeira prova?"))
let nota2 = parseFloat(prompt("Qual a sua nota da segunda prova?"))

let resultado = (nota1 + nota2) /2

console.log(`A sua média é ${resultado}`)

