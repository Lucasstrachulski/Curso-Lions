import promptSync from "prompt-sync";
import {lista} from "./app.js"
const prompt = promptSync();

function RemoverNumero() {
    lista.pop()

    
}
export default RemoverNumero
