import promptSync from "prompt-sync";
const prompt = promptSync();

import baralhos from "./baralho.js";
import flashcard from "./flashcard.js";

function RemoverBaralho() {
  let idParaRemover = parseFloat(
    prompt("Digite o ID do baralho que deseja remover: R: "),
  );

  const baralhoIndex = baralhos.findIndex((b) => b.id === idParaRemover);

  if (baralhoIndex === -1) {
    console.log("\nErro: Baralho não encontrado!");
    return;
  }

  baralhos.splice(baralhoIndex, 1);

  const flashcardsRestantes = flashcard.filter(
    (f) => f.idBaralho !== idParaRemover,
  );

  flashcard.length = 0;
  flashcard.push(...flashcardsRestantes);

  console.log(
    `\nBaralho (ID ${idParaRemover}) e seus flashcards removidos com sucesso!`,
  );
}

function RemoverFlashcard(flashcards) {
  let idParaRemover = parseFloat(
    prompt("Digite o ID do Flashcard que deseja remover: R: "),
  );

  const index = flashcards.findIndex((f) => f.id === idParaRemover);

  if (index === -1) {
    console.log("\nErro: Flashcard não encontrado!");
    return;
  }

  flashcards.splice(index, 1);

  console.log(`\nFlashcard (ID ${idParaRemover}) removido com sucesso!`);
}

export { RemoverBaralho, RemoverFlashcard };