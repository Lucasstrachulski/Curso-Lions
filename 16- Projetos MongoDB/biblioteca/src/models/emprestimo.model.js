import mongoose from "mongoose"

const emprestimos = new mongoose.Schema({
    MaterialId: {
        type: String,
        required: [true, "O Id do Material é obrigatório"],

    },
    nomeAluno: {
        type: String,
        required: [true, "O nome do aluno é obrigatório"]
    },
    turma: {
        type: String,
        required: [true, "A turma é obrigatória"]
    },
    dataEmprestimo: {
        type: String,
        required: [true, " A data deve seguir essa modelo ( 2026-06-15)"]
    },
    diasEmprestimo: {
        type: Number,
        required: [true, "Os dias de emprestimos são obrigatórios"]
    },
    multaPrevista: {
        type: Number,
    },
    status: {
        type: String,
        default: "Emprestado",
        enum: {
            values: ["Emprestado", "Devolvido", "Atrasado"]
        }
    }
})