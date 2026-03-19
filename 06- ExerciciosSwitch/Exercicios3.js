const prompt = require("prompt-sync")();

let codigoProduto;
console.log("A1", "B2", "C3");
let produto = prompt("Digite uma opção! R: ");
codigoProduto = produto;

switch (codigoProduto) {
  case "A1":
    console.log("Você escolheu Batata Chips");
    break;

  case "B2":
    console.log("Você escolheu Amendoim");
    break;

  case "C3":
    console.log("Você escolheu Biscoito ou Chocolate!");
    break;
    
  default:
    console.log("Código Invalido!");
    break;
}
