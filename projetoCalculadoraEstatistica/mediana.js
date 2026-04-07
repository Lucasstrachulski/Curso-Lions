import promptSync from "prompt-sync";
import  {lista} from "./app.js"
const prompt = promptSync();

function medianaNumeros(){
    if(lista.length == 0){
        console.log("Sua lista está vazia!");
      return;  
    }

    const meio  = Math.floor(lista.length / 2)
let resultado;


if(lista.length %  2 !== 0){
    resultado = lista[meio]
}else{
    resultado =  (lista[meio -1] + lista[meio]) / 2;
}
console.log(`Lista ordenada: [${lista}]`);
console.log(`A mediana é ${resultado}`);
}

export default medianaNumeros
