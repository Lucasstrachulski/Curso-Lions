const prompt = require('prompt-sync')();

let ficha = prompt("Digite o nome do seu pet?")
let ficha1 = prompt("Digite a raça do seu pet?")
let ficha2 = prompt("Digite a idade do seu pet?")

let paciente = {nome: [ficha],
    raca:[ficha1],
    idade:[ficha2],
}
if(paciente.idade >= 8){
    console.log(`O paciente ${paciente.nome} já é sênior e precisa de exames de rotina`)
} else{
    console.log("Paciente na faixa de idade regular!")
}