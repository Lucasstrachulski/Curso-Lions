const prompt = require('prompt-sync')();
let filaProjetos = []
let nome = prompt("Digite o nonme do projeto! R: ")
let valor = Number(prompt("Digite o valor estimado do projeto! R: "))

let informacoes = {}
informacoes.nome = nome;
informacoes.valor = valor;

filaProjetos.push(informacoes);

let prazo = prompt("O projeto possui prazo de entrega urgente? (Sim/Não) R: ").toString().toUpperCase()

if(prazo =="SIM" && filaProjetos[0].valor > 3000){
let taxa = filaProjetos[0].valor *0.15
console.log("O valor do seu projeto com a taxa é de R$" + (filaProjetos[0].valor+taxa))
} else{
   console.log("O valor do seu projeto é de R$" + filaProjetos[0].valor)
}
