function listarBaralho(baralhos) {
  console.log("\n--- Baralhos cadastrados ---");

  if (baralhos.length === 0) {
    console.log("Nenhum baralho cadastrado");
    return;
  }

  baralhos.forEach(b => {
    console.log(`ID: ${b.id} | Título: ${b.titulo}`);
  });
}

function listarFlashcard(flashcards) {
  console.log("\n--- Flashcards cadastrados ---");

  if (flashcards.length === 0) {
    console.log("Nenhum flashcard cadastrado!");
    return;
  }

  flashcards.forEach(f => {
    console.log(
      `ID: ${f.id} | Pergunta: ${f.pergunta} | Resposta: ${f.resposta} | Baralho: ${f.idBaralho}`
    );
  });
}

export { listarBaralho, listarFlashcard };