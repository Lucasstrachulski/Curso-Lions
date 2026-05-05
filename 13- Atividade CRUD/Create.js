import promptSync from "prompt-sync";
const prompt = promptSync();

import baralhos from "./baralho.js";
import flashcard from "./flashcard.js";


//Create baralho
function adicionarBaralho(baralhos) {

    console.log("NOVO BARALHO");
    let novoTitulo = prompt("Digite um novo título! R: ")
    
    const novoBaralho = {
      
        id : baralhos.length + 1,
        titulo: novoTitulo 
    };

    baralho.push(novoBaralho);

    return novoBaralho;
}

//Create Flashcard

function criarFlashcard(pergunta, resposta, idBaralho) {

let novaPergunta = "Qual o maior mamifero do mundo?"
let novaResposta = prompt("Resposta: ")


    const novoFlashcard = {
id: flashcard.length + 1,
pergunta: novaPergunta,
resposta: novaResposta,
idBaralho 
    };

    flashcard.push(novoFlashcard);

    return novoFlashcard
}

export default adicionarBaralho;
export default criarFlashcard;