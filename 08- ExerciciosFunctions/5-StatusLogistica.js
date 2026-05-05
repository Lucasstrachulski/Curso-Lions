const prompt = require("prompt-sync")();

function verificarStatus(){
switch (codigo) {
  case "P":
    encomenda1.StatusProduto = "Pendente de Envio!"
    console.log("Pendente de Envio!");
    break;

  case "E":
    encomenda1.StatusProduto = "Em rota de entrega!"
    console.log("Em rota de entrega!");
    break;

  case "C":
    encomenda1.StatusProduto = "Cancelado!"
    console.log("Cancelado!");
    break;

  default:
    console.log("Status inválido!");

    break;
}}


let encomenda1 = {
    ID:12345
}
console.log("---Códigos de Status---");
console.log("P, E, C");

let codigo = prompt("Digite um código! R: ").toString().toUpperCase();

verificarStatus()
console.log(encomenda1);



