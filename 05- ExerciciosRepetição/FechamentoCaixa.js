const prompt = require('prompt-sync')();

let calculo01 = 0;
let calculo02 = 0;
let calculo03  = 0;
const clientesPagos = [];

const carrinhos = [
{ cliente: "João", produtos: [50.0, 120.5, 15.0] },
{ cliente: "Maria", produtos: [200.0, 45.9] },
{ cliente: "Carlos", produtos: [10.0, 5.5, 32.0, 8.0] }
];

carrinhos[0].produtos.forEach((preco) =>{
    calculo01 += preco
})
console.log(`O cliente ${carrinhos[0].cliente} gastou um total de R$:${calculo01}`)

carrinhos[1].produtos.forEach((preco) =>{
    calculo02 += preco
})
console.log(`O cliente ${carrinhos[1].cliente} gastou um total de R$:${calculo02}`)

carrinhos[2].produtos.forEach((preco) =>{
    calculo02 += preco
})
console.log(`O cliente ${carrinhos[2].cliente} gastou um total de R$:${calculo02}`)

let valorTotal = calculo01 + calculo02 + calculo03

let valorRecebido = parseFloat(prompt("Digite o valor recebido em dinheiro! R: "))

while(valorRecebido < valorTotal){
     let falta = valorTotal - valorRecebido
     console.log(`Valor insuficiente! Ainda faltam R$ ${falta}`);

     let novoPagamento = parseFloat(prompt("Digite o valor para completar o pagamento: "));

     valorRecebido += novoPagamento;
     falta++
}

if( valorRecebido > valorTotal){
    let troco = valorRecebido - valorTotal
    console.log(`O seu troco é de R$:${troco}`);

}

clientesPagos.push(carrinhos[0].cliente, carrinhos[1].cliente, carrinhos[2].cliente);



