const prompt = require("prompt-sync")();

let selecaoCasos = [];

const Triagem = (selecaoCasos) => {
  switch (criticidade) {
    case 1:
      console.log("Atendimento Básico!");
      break;

    case 2:
      console.log("Equipe Especializada!");
      break;

    case 3:
      console.log("Gestão em crise!");
      break;


    default:
        console.log("Opção Invalida!");
        
      break;
  }
};
console.log("---Niveis de criticidade---");
console.log("1, 2, 3");

let criticidade = parseInt(prompt("Digite o nivel de criticidade R:"));
selecaoCasos.push(criticidade);

Triagem(selecaoCasos)
console.log(selecaoCasos);


