const prompt = require("prompt-sync")();

let registro = {
  nome: "Lucas",
};

console.log("---Menu de compras!---");
console.log("1-Fone de ouvido");
console.log("2-Teclado");
console.log("3-Mouse");
let escolha = Number(prompt("Digite sua escolha! R: "));
let codigo;



switch (escolha) {
  case 1:
    registro.produto = "Fone de ouvido";
    registro.codigo = parseFloat(prompt("Digite o código do seu produto! R: "));
    break;

  case 2:
    registro.produto = "Teclado";
    registro.codigo = parseFloat(prompt("Digite o código do seu produto! R: "));
    break;
    
  case 3:
    registro.produto = "Mouse"
    registro.codigo = parseFloat(prompt("Digite o codigo do seu produto!"));
    break;
  default:
console.log(("Opção Inválida!"));
    break;
}

console.log(registro);

