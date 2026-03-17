const prompt = require('prompt-sync')();

let senha = "9876";
let seguranca = prompt("Digite sua tentativa! R: ");

while (seguranca  !== senha) {
console.log("Senha incorreta! Cofre bloqueado.");
seguranca = prompt("Digite novamente a senha!");
}
console.log("Senha correta! Cofre liberado.")
