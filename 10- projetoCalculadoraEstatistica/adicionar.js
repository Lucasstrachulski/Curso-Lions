import promptSync from "prompt-sync";
import {lista} from "./app.js";
const prompt = promptSync();



function adicionarNumeros() {
    let num1 = parseFloat(prompt("Digite um número para adionar a lista!"))
    lista.push(num1)
    
}

export default adicionarNumeros
