const prompt = require('prompt-sync')();

let tarefa1 = prompt("Digite a sua primeira tarefa do dia! R: ");
let tarefa2 = prompt("Digite a sua segunda tarefa do dia! R: ");
let tarefa3 = prompt("Digite a sua terceira tarefa do dia! R: ");

let listaTarefas = [];

listaTarefas.push(tarefa1);
listaTarefas.push(tarefa2);
listaTarefas.push(tarefa3);

console.log(`Você tem ${listaTarefas.length} tarefas no seu dia`)