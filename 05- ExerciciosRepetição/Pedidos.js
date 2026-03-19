const prompt = require('prompt-sync')();
let hamburguer = 20;
let Bacon = 5;
let opcao

do{
    console.log("O total do seu pedido foi de R$"+ hamburguer);
    console.log("Vai querer adicionar Bacon no valor de R$5?");
    console.log("1 - Sim");
    console.log("2 - Não");
    let opcao = prompt("Digite sua resposta! R: ");
    if(opcao ==="1"){
      hamburguer += Bacon
    }

}while(opcao === "1")
console.log(`Valor do pedido ${hamburguer}`)


