import promptSync from "prompt-sync";
const prompt = promptSync();

function contaDivisao() {
    let n1 = parseFloat(prompt("Digite o valor 1: "));
    let n2 = parseFloat(prompt("Digite o valor 2: "));
    if (n2 === 0) {
      resultado = "Erro: Divisão por zero!";
    } else {
      return n1 / n2
    }
  }
  export default contaDivisao;