const prompt = require('prompt-sync')()
let estoqueTamanhos = [10,20,30]

let usuario = parseFloat(prompt("Digite quantas camisetas P foram vendidas hoje R: "))
let calculo = estoqueTamanhos[0] - usuario

if(calculo < 5){
    console.log("Alerta: Estoque de luvas tamanho P está crítico!")
} else{
    console.log(`Estoque atualizado. Quantidade restante do tamanho P: ${calculo}`)
}
