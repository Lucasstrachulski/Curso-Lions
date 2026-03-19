const prompt = require('prompt-sync')();

let cotas = parseFloat(prompt(" Digite a quantidade de cotas: "))
let valorDividendo = parseFloat(prompt("Digite o valor de rendimento pago em cada mês:"))
let resultado = cotas * valorDividendo

if(resultado >= 100){
    console.log("Você já tem saldo suficiente para comprar uma nova cota e reinvestir! Seu saldo é de R$"+ resultado+" .")
} else{
    console.log(`Rendimento recebido: R$${resultado}. Acumule mais para reinvestir.`)
}
