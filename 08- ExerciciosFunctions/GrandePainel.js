const prompt = require("prompt-sync")();

const CaixaLoja = {
  Nome: Jordana,
  SaldoInicial: 100,
  HistoricoTransacoes: [],
};

function RestringirVenda(valor) {
  CaixaLoja.SaldoInicial += valor;
  return CaixaLoja.SaldoInicial;
}

function registrarDespesa(valor) {
  CaixaLoja.SaldoInicial -= valor;
  return CaixaLoja.SaldoInicial;
}

