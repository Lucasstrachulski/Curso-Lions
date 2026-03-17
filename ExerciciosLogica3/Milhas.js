const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome! R: ")

const clienteVip = {
    nome: nome,
    historico: [{Destino: "Rio de Janeiro", milhas:2000},
                {Destino: "São Paulo", milhas: 2000}
            ]
}

console.log(" --- Registro do Terceiro Voo ---");
let novoDestino = prompt("Destino: ");
let novasMilhas = parseFloat(prompt("Milhas acumuladas: "));

clienteVip.historico.push({Destino: novoDestino, milhas: novasMilhas})

let calculo = clienteVip.historico[0].milhas + clienteVip.historico[1].milhas + clienteVip.historico[2].milhas
clienteVip.categoria = "Gold"

if(calculo > 5000){
    calculo -= 5000
    clienteVip.categoria = "Platinum";
    console.log("Parábens! Você atingiu a categoria Platinum!")
} else{
    let falta = 5000 - calculo
    console.log(`Você ainda é Gold. Faltam ${falta} milhas para o upgrade!`)
}
clienteVip.saldoTotal = calculo;

console.log("Perfil Final do cliente: ", clienteVip)