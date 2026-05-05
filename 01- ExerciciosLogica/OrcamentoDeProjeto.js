const prompt = require('prompt-sync')();

let horas = parseFloat(prompt("Qual a quantidade de horas estimadas? "))
let cliente = prompt("O cliente é uma ONG? (S/N) R: ").toUpperCase()
const valorHora = 45

let resultado = horas * valorHora

if(resultado > 5000 && cliente === "S"){
  resultado = resultado *  0.90 
 console.log(`O valor total com o desconto é ${resultado}`)
}else{
    console.log("O valor total sem desconto é de R$: "+ resultado)
}