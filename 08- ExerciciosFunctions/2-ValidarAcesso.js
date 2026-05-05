const prompt = require('prompt-sync')();


const validarAcesso = (nome, cracha) => nome.length > 5 && cracha > 1000;


let nome = prompt("Digite o seu nome! R: ");
let cracha = Number(prompt("Digite o número do seu crachá! R: "));


if (validarAcesso(nome, cracha)) {
    console.log("Acesso concedido!");
} else {
    console.log("Acesso Negado!");
}

