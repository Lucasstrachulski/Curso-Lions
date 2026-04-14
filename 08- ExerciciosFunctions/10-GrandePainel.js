const prompt = require("prompt-sync")();

let operação = "";
let venda = 0;
let despesa = 0;

const CaixaLoja = {
  Nome: "",
  SaldoInicial: 100,
  HistoricoTransacoes: [],
};

function RegistrarVenda(saldo, venda) {
  return saldo + venda;
}

function registrarDespesa(saldo, despesa) {
  return saldo - despesa;
}

while (operação != "Sair") {
  console.log("Qual operação deseja realizar?\n[V]- Venda\n [D]- Despesa\n [Sair]- Fechar o programa\n R: ");
  operação = prompt();

  switch (operação) {
    case "V":
      venda = parseFloat(prompt("Quanto foi o valor da venda? R: "));
      CaixaLoja.saldo = RegistrarVenda(CaixaLoja.SaldoInicial, venda);
      CaixaLoja.HistoricoTransacoes.push("Entrada");
      break;

    case "D":
      despesa = parseFloat(prompt("Quanto foi o valor da despesa? R: "));
      CaixaLoja.saldo = registrarDespesa(CaixaLoja.SaldoInicial, despesa);
      CaixaLoja.HistoricoTransacoes.push("Saida");
      break;

    case "Sair":
      console.log("Programa fechando!");
      break;

    default:
      console.log("Opção Invalida!");
      break;
  }
}
console.table(CaixaLoja)

