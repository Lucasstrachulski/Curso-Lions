
import adicionarContato from "./AdicionarContato.js";
//import Adicionar from "./AdicionarContato.js";
//import Atualizar from "./Atualizar.js";
import contatos from "./Dados.js";
import Dados from "./Dados.js";
import listarContato from "./ListarContato.js";
import Listar from "./ListarContato.js";
//import Remover from "./RemovendoContato.js";

import express from "express";

const  router = express();
const porta = 3000;

router.use(express.json());

router.get(("/"), (req,resp) =>{
resp.status(203).send({mensagem: "Servidor funcionando!"})
});

router.post(("/contatos"), (req, resp) => {
 
  const {nome,email} = req.body;
  const resultado = adicionarContato(contatos,{nome, email});

  if(!resultado){
    return resp.status(400).send({mensagem:"Email ja cadastrado! "})
  }

  resp.status(201).send({ mensagem: "Contato adicionado com sucesso!"})
});

router.listen((porta),() =>{
  console.log("Servidor rodando na porta " + porta+ "!");
});

router.get(("/contatos"),(req, resp) => {

resp.status(200).send(listarContato(contatos))
})

router.put(("/contatos/:id"),(req, resp) => {
  
})



/*
function mainMenu() {
  console.log("\n--- Menu de contatos ---");
  console.log("1- Listar Contatos (READ)");
  console.log("2- Adicionar Contatos(CREATE)");
  console.log("3- Atualizar Contato(UPDATE)");
  console.log("4- Remover Contato(DELETE)");
  console.log("5- Sair");
}

while (opcao !=5 ) {
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
      let nome = prompt("Nome:")
      let email = prompt("Email:")
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
*/
