function listarBaralho(baralhos) {

    console.log("---Baralhos cadastrados---");
    
    if (baralhos.length === 0) {
        console.log("Nenhum baralho cadastrado");
        return;
    }

    console.log(baralhos);
       
}

function listarFlashcard(flashcard) {

    console.log("---Flashcards cadastrados---");
    
    if(flashcard.length === 0){
        console.log("Nenhum flashcard cadastrado!");
    return;
    }

    console.log(flashcards);
    
}