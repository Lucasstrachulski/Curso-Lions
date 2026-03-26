const prompt = require("prompt-sync")();
let continuar = true;

//ADIÇÃO
let n2 = 0;
let n1 = 0;
let resultado = 0;

function contaAdicao(numeroAdicao1, numeroAdicao2) {
  numeroAdicao1 = parseFloat(prompt("Digite o valor 1 R: "));
  numeroAdicao2 = parseFloat(prompt("Digite o valor 2 R: "));
  resultado = numeroAdicao1 + numeroAdicao2;
}

//Subtração
let numeroSubtracao1 = 0;
let numeroSubtracao2 = 0;

function contaSubtracao(numeroSubtracao1, numeroSubtracao2) {
  numeroSubtracao1 = parseFloat(prompt("DIgite o valor 1 R: "));
  numeroSubtracao2 = parseFloat(prompt("Digite o valor 2 R: "));
  resultado = numeroSubtracao1 - numeroSubtracao2;
}

//Divisão

let numeroDivisao1 = 0;
let numeroDivisao2 = 0;

function contaDivisao(numeroDivisao1, numeroDivisao2) {
  numeroDivisao1 = parseFloat(prompt("Digite o valor 1 R: "));
  numeroDivisao2 = parseFloat(prompt("Digite o valor 2 R: "));
  resultado = numeroDivisao1 / numeroDivisao2;
}

//Multiplicação

let numeroMulti1 = 0;
let numeroMulti2 = 0;

function contaMultiplicacao(numeroMulti1, numeroMulti2) {
  numeroMulti1 = parseFloat(prompt("DIgite o valor 1 R: "));
  numeroMulti2 = parseFloat(prompt("Digite o valor 2 R: "));
  resultado = numeroMulti1 * numeroMulti2;
}

// Porcentagem
let valorBase = 0;
let percentual = 0;

function contaPorcentagem() {
  valorBase = parseFloat(prompt("Digite o valor total: "));
  percentual = parseFloat(prompt("Digite a porcentagem (ex: 10 para 10%): "));

  resultado = (valorBase * percentual) / 100;
}

//contaPorcentagem();
while (continuar) {
  console.log("---CALCULADORA---");
  console.log("Selecione a operação desejada!");
  console.log("1- Adição");
  console.log("2-Subtração");
  console.log("3-Divisão");
  console.log("4-Multiplicação");
  console.log("5-Porcentagem");
  console.log("0-Sair");
  let escolha = Number(prompt("Digite uma operação matemática!"));

  switch (escolha) {
    case 1:
      contaAdicao();
      console.log(resultado);
      resultado = 0;
      break;

    case 2:
      contaSubtracao();
      console.log(resultado);
      resultado = 0;
      break;

    case 3:
      contaDivisao();
      console.log(resultado);
      resultado = 0;
      break;

    case 4:
      contaMultiplicacao();
      console.log(resultado);
      resultado = 0;
      break;

    case 5:
      contaPorcentagem();
      console.log(resultado);
      resultado = 0;
      break;
    case 0:
      console.log("Saindo... até logo!");
      continuar = false;
      break;
      
    default:
      console.log("Operação não encontrada!");
      break;
  }
}
