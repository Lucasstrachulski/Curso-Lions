import promptSync from "prompt-sync";
const prompt = promptSync();

import Dados from "./Dados.js"
const {medicos, pacientes, consultas} = Dados

function adicionarConsulta() {

  let idpacienteExiste = false;
  let idMedicoExiste = false;

  //Adicionar ID

  const id = consultas.length + 1;
  let nome = prompt("Digite seu nome! R: ");
  let dataConsulta = prompt("Digite sua data de consulta! R: ");
  let idmedico = parseInt(prompt("Digite o ID do médico! R: "));
  let idpaciente = parseInt(prompt("Digite o ID do paciente! R: "));
  let Descricao = prompt("DESCRIÇÃO! R:");

  const indiceM = consultas.findIndex((consultas) => consultas.idMedico == idmedico )
  const indiceP = consultas.findIndex((consultas) => consultas.idPaciente == idpaciente )


  if(indiceM == -1){
console.log("Erro! Não possui nenhum médico com esse ID");
return false;
  }

  if(indiceP == -1){
    console.log("Erro! Não possui nenhum paciente com esse ID");
    return false;
      }

  const novaConsulta = {
    id: id,
    data: dataConsulta,
    idMedico: idmedico,
    idPaciente: idpaciente,
    descricao: Descricao,
  };
  consultas.push(novaConsulta)
}

export default adicionarConsulta
