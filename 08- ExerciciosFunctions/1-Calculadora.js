const prompt = require("prompt-sync")();

console.log("Estagiário", "Júnior", "Pleno");
let cargo = prompt("Digite seu cargo! R: ");
let salario = parseFloat(prompt("Digite seu salário atual! R: "));

let resultado = fichaOperador(cargo, salario);


function fichaOperador(cargo, salario) {
  let bonus;
  switch (cargo) {
    case "Estagiário":
      bonus = salario * 1.1;
      console.log(`O seu salário com o bônus é de R$${bonus}`);
      return bonus;
      break;

    case "Júnior":
      bonus = salario * 1.15;
      console.log(`O seu salário com o bônus é de R$${bonus}`);
      return bonus;
      return bonus;
      break;

    case "Pleno":
      bonus = salario * 1.2;
      console.log(`O seu salário com o bônus é de R$${bonus}`);
      return bonus;
      return bonus;
      break;

    default:
      console.log("Seu bônus é 0!");
      break;
  }
}


