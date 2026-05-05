const prompt = require('prompt-sync')();
let tempInicial = parseFloat(prompt("Digite a temperatura inicial! R: "))

for(let i =1; i<=5; i++){
    tempInicial += 2
    console.log("Calibragem" + i + ": " + tempInicial + "°C")
}
