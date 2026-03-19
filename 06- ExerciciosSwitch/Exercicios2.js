const prompt = require("prompt-sync")();

let nota = parseFloat(prompt("Digite sua nota! R: "));

switch (true) {
  case (nota >= 90 && nota <=100):
   
    console.log(" Nota A");
    break;

  case (nota >= 80 && nota <=89):
   
    console.log(" Nota B");
    break;

  case (nota >= 70 && nota<= 79):
  
    console.log(" Nota C");
    break;

  case (nota >= 60 && nota <=69):
    
    console.log("Nota D");
    break;

  case (nota >=0 && nota<= 59):
 
    console.log("Nota F");
    break;

  default:
    break;
}
