import promptSync from "prompt-sync";
import { lista } from "./app.js";
const prompt = promptSync();

function mediaNumeros() {
  let numero = 0;
  let soma = 0;

  if (lista.length === 0) {
    console.log("A lista está vazia!");
    return;
  }
  lista.forEach((numero) => {
    soma += numero;
  });
  const media = soma / lista.length;
  console.log(`A média é: ${media}`);
}

export default mediaNumeros;
