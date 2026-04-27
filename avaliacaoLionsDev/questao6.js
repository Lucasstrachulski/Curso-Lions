let lista = [10,20,30,40]

let soma = 0

for(let i = 0; i< lista.length; i++){
    if(lista[i] % 2 == 0 ){
        soma += lista[i]
    }
}
console.log(`A soma dos números da lista é: ${soma}`);