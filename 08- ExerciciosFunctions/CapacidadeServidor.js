const prompt = require("prompt-sync")();

const servidor = {
  nome: "Netflix",
  EspacoTotal: 5000,
  EspacoOcupado: 2000,
};

let EspacoNovoFilme = parseInt(
  prompt("Digite o tamanho (EM GB) do novo filme! R: "),
);
servidor.EspacoNovoFilme = EspacoNovoFilme;

function VerificarCapacidade(servidor) {
  let total = servidor.EspacoNovoFilme + servidor.EspacoOcupado

  if (total <= servidor.EspacoTotal) {
    console.log("Sucesso, filme cabe no servidor");
     return true;
  } else {
    console.log("Erro!Filme não cabe no servidor");
    
     return false;
  }
}


console.log(servidor);
VerificarCapacidade(servidor)
