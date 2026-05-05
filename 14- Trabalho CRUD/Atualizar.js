import promptSync from "prompt-sync";
const prompt = promptSync();

import baralhos from "./baralho.js";
import flashcard from "./flashcard.js";

function AtualizarBaralho(baralhos) {
  let perguntaID = parseFloat(
    prompt("Qual baralho você quer trocar de nome ( Digite pelo ID). R: "),
  );


  const baralhoEncontrado = baralhos.find((b) => b.id === perguntaID);


  if (!baralhoEncontrado) {
    console.log("Baralho não encontrado!");
    return;
  }

  let novoNome = prompt(
    `Você escolheu o baralho ${baralhoEncontrado.titulo}. Digite o novo nome! R:  `,
  );


  if (novoNome.trim() !== "") {
    baralhoEncontrado.titulo = novoNome.trim();
    console.log(
      `\nBaralho atualizado com sucesso! Novo título: "${baralhoEncontrado.titulo}"`,
    );
  } else {
    console.log("\nErro: O título não pode ficar em branco.");
  }
}

function AtualizarFlashcard(flashcards) {
  let perguntaID2 = parseFloat(
    prompt("Digite o ID do Flashcard que deseja atualizar: R: "),
  );


  const flashcardEncontrado = flashcards.find((f) => f.id === perguntaID2);

  if (!flashcardEncontrado) {
    console.log("Flashcard não encontrado!");
    return;
  }

  let novaPergunta = prompt("Digite sua nova pergunta? ");
  let novaResposta = prompt("Digite sua resposta. R: ");

  if (novaPergunta.trim() !== "") {
    flashcardEncontrado.pergunta = novaPergunta.trim();
  }

  if (novaResposta.trim() !== "") {
    flashcardEncontrado.resposta = novaResposta.trim();
  }

  console.log("Flashcard atualizado!");
}

export { AtualizarBaralho, AtualizarFlashcard };