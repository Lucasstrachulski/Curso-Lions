const prompt = require("prompt-sync")();

const VerificarMoeda = (valorReais, Destino) => {
  switch (Destino) {
    case "USD":
      let USD = valorReais / 5;
      console.log(`Seu total de USD é de ${USD}`);

      break;

    case "EUR":
      let EUR = valorReais / 6;
      console.log(`Seu total de EUR é de ${EUR}`);

      break;

    case "GBP":
      let GBP = valorReais / 7;
      console.log(`Seu total de GBP é de ${GBP}`);

      break;

    default:
      console.log("Seu valor em reais é R$:"+valorReais);

      break;
  }
};
console.log("USD, EUR, GBP");
let valor = 0;

let valorReais = parseFloat(prompt("Digite o valor em Reais! R$:"));
let Destino = prompt("Digite o destino da sua moeda! R: ");

VerificarMoeda(valorReais, Destino);
