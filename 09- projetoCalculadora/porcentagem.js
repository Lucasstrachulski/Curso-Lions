import promptSync from "prompt-sync";
const prompt = promptSync();

function contaPorcentagem() {
  let n1 = parseFloat(prompt("Digite o valor total: "));
  let n2 = parseFloat(prompt("Digite a porcentagem (ex: 10): "));
  
  // Cálculo: (Total * Porcentagem) / 100
  let calculo = (n1 * n2) / 100; 
  
  return calculo; 
}

export default contaPorcentagem;
