const prompt = require('prompt-sync')();
 let TaxaFixa = 20
 let kmRodado = 1.50
 let Distancia = parseFloat(prompt("Digite a distância em km! R: "))
 let pergunta = prompt("A entrega é considerada de risco ou urgente? (s/n)")
 let calculo = (Distancia * kmRodado) + TaxaFixa

 if(Distancia > 100  || pergunta == "s"){
    let TaxaExtra = calculo + 15
    console.log("O total do frete com a taxa é de R$" + TaxaExtra)
 }else{
    console.log("O total do frete sem a taxa é de R$" + calculo)
 }
 