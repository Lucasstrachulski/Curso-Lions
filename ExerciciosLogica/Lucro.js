const prompt = require('prompt-sync')();
let Producao = parseFloat(prompt("Digite o custo de produção desse lote! R:"))
let Venda = parseFloat(prompt("Digite o valor de venda desse lote! R:"))
 
let Lucro = Venda - Producao
 
if(Lucro == 0){
    console.log("O seu lucro é de zero")
} else if(Lucro < 500 ) {
    console.log("Atenção: Margem de lucro perigosamente baixa")
}
else{
    console.log("Margem de lucro saudável : R$" + Lucro)
}
