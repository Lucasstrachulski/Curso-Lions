const prompt = require('prompt-sync')();

let vendedor = parseFloat(prompt("Digite o valor total de vendas! R: "))

if(vendedor >= 20000){
    let comissao = vendedor * 0.05
    console.log(`Como bateu a meta sua comissao é de R$${comissao}`)
} else{
    let ForaMeta =  vendedor * 0.02
    console.log(`Infelizmente a meta não foi batida, então sua comissao é de R$${ForaMeta}`)
}