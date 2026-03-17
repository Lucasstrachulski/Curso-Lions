const prompt = require('prompt-sync')();
let carrinho = {}
let nome = prompt("Digite o seu nome! R: ")
let assinatura = prompt("Digite a opção da sua assinatura (Prime/Padrão R: ").toString().toUpperCase().toLowerCase()
let item1 = parseFloat(prompt("Digite o preço do item1! R: "))
let item2 = parseFloat(prompt("Digite o preço do item2 ! R:"))
let item3 = parseFloat(prompt("Digite o preço do item3 ! R:"))
let Itens = []
Itens.push(item1, item2, item3)
carrinho.nome = nome,
carrinho.assinatura = assinatura,
carrinho.Itens = Itens;

let calculo = carrinho.Itens[0] + carrinho.Itens[1] + carrinho.Itens[2]

if(calculo > 200 || assinatura == "Prime"){
    let frete = "Frete Gratis!"
    carrinho.frete = frete
    console.log("O Frete é por nossa conta!" , carrinho)
} else{
    let taxa = calculo + 30
    console.log(carrinho, "O total da sua compra foi de R$" + taxa)
}