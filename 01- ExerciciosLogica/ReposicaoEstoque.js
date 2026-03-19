const prompt = require('prompt-sync')();
let quantidadeAtual = parseFloat(prompt("Digite a quantidade de estoque atual! R: "))
let quantidadeMinima = parseFloat(prompt("Digite a quantidade mínima de estoque! R: "))

if(quantidadeAtual < quantidadeMinima){
    let calculo = quantidadeMinima - quantidadeAtual
    console.log(`Alerta: Estoque baixo! É necessário solicitar a compra de ${calculo} unidades`)
} else{
    console.log("Estoque regularizado.")
}