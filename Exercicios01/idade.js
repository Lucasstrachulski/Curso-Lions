const prompt = require ('prompt-sync')();
let nome = prompt("Digite seu nome! R:")
let Idade = parseFloat(prompt("Digite sua idade! R:"))
const anoAtual = 2026
let JaFezAniversario = prompt("Ja fez aniversario esse ano? (S/N) R:").toUpperCase()

if (JaFezAniversario == "S"){
    let resultado1 = anoAtual - Idade
    console.log(`Parabens pela sua data ${nome}, você nasceu em ${resultado1}!`)
}
 else{
    let resultado2 = anoAtual - Idade - 1
    console.log(`Espere por sua data ${nome}, você nasceu em  ${resultado2}!` )
 }
 
