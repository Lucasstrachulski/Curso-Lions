const prompt = require('prompt-sync')();

let pontuacoes = []

let pontuacao1 = parseInt(prompt("Digite sua primeira pontuação! R: "))
let pontuacao2 = parseInt(prompt("Digite sua segunda pontuação! R: "))
let pontuacao3 = parseInt(prompt("Digite sua terceira pontuação! R: "))

pontuacoes.push(pontuacao1, pontuacao2, pontuacao3)
let resultado = 0

const VerificarPontuacoes = (pontuacoes) =>{
pontuacoes.forEach(pontuacoes => { 
resultado += pontuacoes;

})
return resultado;
}

let totalSoma = VerificarPontuacoes(pontuacoes);

if(totalSoma > 200 || pontuacoes[2] > 90){
    console.log("Veterano!");
    
}else{
    console.log("Iniciante!");
}
console.log(pontuacoes);
