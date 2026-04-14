import promptSync from "prompt-sync";
const prompt = promptSync();
function contaMultiplicacao() {
    let n1 = parseFloat(prompt("Digite o valor 1: "));
    let n2 = parseFloat(prompt("Digite o valor 2: "));
  return n1 * n2
  }
  
  export default contaMultiplicacao;