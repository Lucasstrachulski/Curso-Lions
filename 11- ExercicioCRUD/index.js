import promptSync from "prompt-sync";
const prompt = promptSync();

import Adicionar from "./AdicionarConsulta.js"
import Dados from "./Dados.js"
import adicionarConsulta from "./AdicionarConsulta.js";
const {medicos, pacientes, consultas} = Dados


//function mainMenu() {
    adicionarConsulta()
    console.log(consultas);
    //*/console.log("\n--- Menu de contatos ---");
    //console.log("1- Listar Consultas (READ)");
    //console.log("2- Adicionar Consulta(CREATE)");
    //console.log("3- Atualizar Consulta(UPDATE)");
    //console.log("4- Remover consulta(DELETE)");
    //console.log("5- Sair");*
//  }
