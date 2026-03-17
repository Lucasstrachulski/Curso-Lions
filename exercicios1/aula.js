const prompt = require('prompt-sync')();

let nome = prompt ("Nome do pet?")
let idade = prompt ("Idade do pet?")


console.log("O " + nome + ", tem " + idade + " anos de idade.");
console.log(`O nome do meu cachorro é ${nome}, e a idade dele é ${idade} anos`)