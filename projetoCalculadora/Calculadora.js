import promptSync from "prompt-sync";
const prompt = promptSync();

import contaAdicao from "./somar.js"
import contaSubtracao from "./subtrair.js"
import contaMultiplicacao from "./multiplicar.js"
import contaDivisao from "./dividir.js"
import contaPorcentagem from "./porcentagem.js"

let continuar = true;
let n1 = 0;
let n2 = 0;
let resultado = 0;

// ADIÇÃO
/*function contaAdicao() {
  n1 = parseFloat(prompt("Digite o valor 1: "));
  n2 = parseFloat(prompt("Digite o valor 2: "));
 return n1 + n2; 
}

// Subtração
function contaSubtracao() {
  n1 = parseFloat(prompt("Digite o valor 1: "));
  n2 = parseFloat(prompt("Digite o valor 2: "));
 return n1 - n2;
}

// Divisão
function contaDivisao() {
  n1 = parseFloat(prompt("Digite o valor 1: "));
  n2 = parseFloat(prompt("Digite o valor 2: "));
  if (n2 === 0) {
    return "Erro: Divisão por zero!";
  } else {
    return n1 / n2;
  }
}

// Multiplicação
function contaMultiplicacao() {
  n1 = parseFloat(prompt("Digite o valor 1: "));
  n2 = parseFloat(prompt("Digite o valor 2: "));
 return n1 * n2;
}

// Porcentagem
function contaPorcentagem() {
  n1 = parseFloat(prompt("Digite o valor total: "));
  n2 = parseFloat(prompt("Digite a porcentagem (ex: 10 para 10%): "));
  return (n1 * n2) / 100; 
}*/

while (continuar) {
  console.log("\n--- CALCULADORA ---");
  console.log("1- Adição");
  console.log("2- Subtração");
  console.log("3- Divisão");
  console.log("4- Multiplicação");
  console.log("5- Porcentagem");
  console.log("0- Sair");
  
  let escolha = Number(prompt("Selecione a operação: "));

  switch (escolha) {
    case 1:
      resultado = contaAdicao();
      console.log("Resultado: " + resultado);
      break;
    case 2:
      resultado = contaSubtracao();
      console.log("Resultado: " + resultado);
      break;
    case 3:
      resultado = contaDivisao();
      console.log("Resultado: " + resultado);
      break;
    case 4:
      resultado = contaMultiplicacao();
      console.log("Resultado: " + resultado);
      break;
    case 5:
      resultado = contaPorcentagem();
      console.log("Resultado: " + resultado);
      break;
    case 0:
      console.log("Saindo... até logo!");
      continuar = false;
      break;
    default:
      console.log("Operação inválida!");
      break;
  }
}