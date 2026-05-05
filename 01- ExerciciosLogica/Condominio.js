const prompt = require('prompt-sync')();

let valorOriginal = parseFloat(prompt("Digite o valor original do condominio! R: "))
let DiasAtraso = parseFloat(prompt("Digite a quantidade de dias atrasados! R: "))
let feriado = prompt("O vencimento original caiu em um feriado ou final de semana? (s/n)")

if( DiasAtraso > 0 && feriado == "n"){
    let atraso = DiasAtraso * 1
    let multa = valorOriginal * 0.02
    let total = valorOriginal + atraso + multa
    console.log("---Boleto atrasado---")
    console.log(`-Juros por dia : R$1`)
    console.log(`-Multa fixa: 2%`)
    console.log(`-Valor total do boleto: ${total}`)
} else{
    console.log("---Boleto sem atrasos---")
    console.log(`-Valor Original do boleto: ${valorOriginal}`)
}