const prompt = require('prompt-sync')();

let distancia = parseFloat(prompt("Digite a distância percorrida em km! R:"))
let combustivel = parseFloat(prompt("Digite a quantidade de combustivel gasta em Litros"))

let resultado = distancia / combustivel

if(resultado < 10){
console.log("Alerta: Veículo consumindo muito combustível. Necessário agendar revisão mecânica.")
}else{
    console.log("Consumo dentro do padrão operacional.")
}
