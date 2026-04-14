import promptSync from "prompt-sync";
const prompt = promptSync();

import Adicionar from "./AdicionarContato.js";
import Atualizar from "./Atualizar.js";
import Dados from "./Dados.js";
import Listar from "./ListarContato.js";
import Remover from "./RemovendoContato.js";


function mainMenu() {
  console.log("\n--- Menu de contatos ---");
  console.log("1- Listar Contatos (READ)");
  console.log("2- Adicionar Contatos(CREATE)");
  console.log("3- Atualizar Contato(UPDATE)");
  console.log("4- Remover Contato(DELETE)");
  console.log("5- Sair");
}

while (opcao) {
  mainMenu();
  opcao = parseFloat(prompt("Digite uma opção! R: "));

  switch (opcao) {
    case 1:
      //Operação READ
      listarContato(contatos);
      break;

    case 2:
      //Operação CREATE
      adicionarContato(contatos);
      break;

      case 3: 
      //Operação UPDATE
      atualizarContato(contatos)
      break;

      case 4:
        //Operação DELETE
        RemovendoContato(contatos)
        break;
        case 5:
            console.log("Saindo... Até logo!");


    default:

      break;
  }
}
