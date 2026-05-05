import promptSync from "prompt-sync";
const prompt = promptSync();


import baralhos from "./baralho.js";
import flashcards from "./flashcard.js";

import { adicionarBaralho, criarFlashcard } from "./Create.js";
import { AtualizarBaralho, AtualizarFlashcard } from "./Atualizar.js";
import { RemoverBaralho, RemoverFlashcard } from "./Remover.js";
import { listarBaralho, listarFlashcard } from "./Leitura.js";

function menu() {
  console.log("\n===== MENU CRUD =====");
  console.log("1 - Criar Baralho");
  console.log("2 - Criar Flashcard");
  console.log("3 - Listar Baralhos");
  console.log("4 - Listar Flashcards");
  console.log("5 - Atualizar Baralho");
  console.log("6 - Atualizar Flashcard");
  console.log("7 - Remover Baralho");
  console.log("8 - Remover Flashcard");
  console.log("0 - Sair");
}

let opcao;

do {
  menu();
  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      adicionarBaralho(baralhos);
      break;

    case "2":
      criarFlashcard();
      break;

    case "3":
      listarBaralho(baralhos);
      prompt("\nPressione ENTER para voltar ao menu...");
      break;

    case "4":
      listarFlashcard(flashcards);
      prompt("\nPressione ENTER para voltar ao menu...");
      break;

    case "5":
      AtualizarBaralho(baralhos);
      break;

    case "6":
      AtualizarFlashcard(flashcards);
      break;

    case "7":
      RemoverBaralho();
      break;

    case "8":
      RemoverFlashcard(flashcards);
      break;

    case "0":
      console.log("Saindo...");
      break;

    default:
      console.log("Opção inválida!");
  }

} while (opcao !== "0");