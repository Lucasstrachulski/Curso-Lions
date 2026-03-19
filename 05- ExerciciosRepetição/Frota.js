const prompt = require('prompt-sync')();
let capacidade = 1000
let totalAcumulada = 0;
let contadorCaixas = 0;

while(true){
    let pesoCaixa = parseFloat(prompt("Digite o peso da caixa! R: "))

    if(totalAcumulada + pesoCaixa >= capacidade){
    console.log("ALERTA: Peso limite atingido!");
break;
}

totalAcumulada +=pesoCaixa
contadorCaixas++

console.log("Caixa adicionada. Total atual: "+totalAcumulada + "kg!")}

console.log("---RESUMO FINAL---")
console.log("Total de caixas acumuladas:" + contadorCaixas)
console.log("Peso total do carregamento:"+totalAcumulada)
