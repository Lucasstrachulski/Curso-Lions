const prompt = require('prompt-sync')();
let listaAlunos = ['Lucas','Pedro']
let aluno = prompt("Digite o terceiro aluno! R: ")
listaAlunos.push(aluno)
console.log(`Turma formada com sucesso! Alunos:${listaAlunos.length}`)
