import promptSync from "prompt-sync";
const prompt = promptSync();

import adicionarNumeros from "./adicionar.js";
import RemoverNumero from "./remover.js";
import mediaNumeros from "./media.js";
import medianaNumeros from "./mediana.js";

let continuar = true;
export const lista = [];

while (continuar) {
  console.log("---MENU---");
  console.log("1- Adicionar número na lista!");
  console.log("2- Remover o último número adicionado na lista!");
  console.log("3- Calcular a Média da lista!");
  console.log("4- Calcular a Mediana da lista!");
  console.log("0- Sair");

  let numero = parseInt(prompt("Digite uma opção!"));

  switch (numero) {
    case 1:
      adicionarNumeros();
      console.log(lista);
      break;

    case 2:
      RemoverNumero();
      console.log(lista);
      break;

    case 3:
      mediaNumeros();
      break;

    case 4:
      medianaNumeros();
      break;

    case 0:
      console.log("Saindo... até logo!");
      continuar = false;
      break;

    default:
      console.log("Operação invalida!");

      break;
  }
}
