let lista = [10,20,30,40,50]

let maiorValor = lista[0];


for(let i = 0;  i < lista.length; i++){
    if(lista[i] > maiorValor){
    maiorValor = lista[i]
    }
}
console.log(`O maior número da lista é:${maiorValor}`);
