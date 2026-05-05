import promptSync from "prompt-sync";
const prompt = promptSync();

import baralhos from "./baralho.js";
import flashcards from "./flashcard.js";


function adicionarBaralho(baralhos) {
  console.log("NOVO BARALHO");

  let novoTitulo = prompt("Digite um novo título! R: ");

  const novoBaralho = {
    id: baralhos.length + 1,
    titulo: novoTitulo
  };

  baralhos.push(novoBaralho);

  return novoBaralho;
}


function criarFlashcard() {
  console.log("NOVO FLASHCARD");

  let novaPergunta = prompt("Pergunta: ");
  let novaResposta = prompt("Resposta: ");
  let idBaralho = parseFloat(prompt("ID do Baralho: "));

  const novoFlashcard = {
    id: flashcards.length + 1,
    pergunta: novaPergunta,
    resposta: novaResposta,
    idBaralho
  };

  flashcards.push(novoFlashcard);

  return novoFlashcard;
}

export { adicionarBaralho, criarFlashcard };