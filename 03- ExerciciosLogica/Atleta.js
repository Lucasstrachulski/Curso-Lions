const prompt = require('prompt-sync')();

let ficha = {}

let nome = prompt("Digite seu nome! R: ")
let peso = parseFloat(prompt("Digite seu peso atual! R: "))
let meta = prompt("A sua meta seria? (Emagrecimento/Performance) R: ").toString().toLocaleLowerCase().toUpperCase()
let maratona1 = parseFloat(prompt("Digite a distância percorrida da sua primeira maratona! R: "))
let maratona2 = parseFloat(prompt("Digite a distância percorrida da sua segunda maratona! R: "))
let maratona3 = parseFloat(prompt("Digite a distância percorrida da sua terceira maratona! R: "))
let corridaHoje = parseFloat(prompt("Digite a sua distância percorrida hoje! R: "))

let corridas = []
corridas.push(maratona1, maratona2, maratona3, corridaHoje)

ficha.nome = nome,
ficha.peso = peso,
ficha.meta = meta,
ficha.corridas = corridas;

let calculo = (ficha.corridas[1] + ficha.corridas[2] + ficha.corridas[3]) /3

if(calculo > 20 && meta == "EMAGRECIMENTO"){
    ficha.peso = ficha.peso - 1
    ficha.selo = "Meta atingida!"
    console.log("Meta atingida! Peso atualizado!")
} else if(meta =="PERFORMANCE" && ficha.corridas[3] > ficha.corridas[2]){
    ficha.selo = "Novo recorde pessoal!"
    console.log("Novo recorde pessoal!")
}

console.log("Perfil atualizado!", ficha)
