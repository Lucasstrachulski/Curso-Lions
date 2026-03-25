const prompt = require("prompt-sync")();

let temperaturas = [];
let temp1 = Number(prompt("Digite a primeira temperatura! R: "));
let temp2 = Number(prompt("Digite a segunda temperatura! R: "));
let temp3 = Number(prompt("Digite a terceira temperatura! R: "));
temperaturas.push(temp1, temp2, temp3);
let media = 0
let resultado = 0

const avaliarTemperatura = (temperaturas) => {
  temperaturas.forEach((temperatura) => {
    resultado += temperatura;
  });
  media = resultado / 3;
  return media;
};


if(avaliarTemperatura(temperaturas) > 30){
    console.log("Alerta de aquecimento!");
} else{
    console.log("Clima estável!");
}

console.log(temperaturas);




