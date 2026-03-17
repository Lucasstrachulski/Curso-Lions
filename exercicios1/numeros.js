const prompt = require('prompt-sync') ();

let num1 = parseFloat(prompt("Digite um número"))

if (num1 == 0){
    console.log("O número que você digitou é zero!")
} else if (num1 % 2 == 0){
console.log ("O némero que você digitou é par!")
} else{
    console.log("O número que você digitou é impar!")
}
