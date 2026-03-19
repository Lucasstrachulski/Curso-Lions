const prompt = require('prompt-sync')();
let estacao = {
    Id:"Sensor 01",
    Local: "Laboratório",
    Temperaturas : Temp = []
}

let temp1 = parseInt(prompt("Digite a temperatura registrada na parte da manhã! R: "));
let temp2 = parseInt(prompt("Digite a temperatura registrada na parte da tarde! R: "));
let temp3 = parseInt(prompt("Digite a temperatura registrada na parte da noite! R: "));
estacao.Temperaturas.push(temp1, temp2, temp3)

let media = (estacao.Temperaturas[0] + estacao.Temperaturas[1] + estacao.Temperaturas[2])/3

if(media > 35){
    estacao.alerta = true;
    console.log(`PERIGO! Média de temperatura extrema ${media} detectada no ${estacao.LOcal}`)
}else{
    estacao.alerta = false;
    console.log("Temperaturas dentro da normalidade")
}

console.log(`Objeto da estação: ${estacao}`)