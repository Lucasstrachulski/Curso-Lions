import mongoose from "mongoose";

const matriculas = new mongoose.Schema({
  NomeAluno: {
    type: String,
    requerid: [true, "O nome é obrigatório!"],
  },

  Idade: {
    type: Number,
    requerid: [true, "A idade é obrigatória!"],
  },
  Modalidade: {
    type: String,
    requerid: [true, "A modalidade é obrigatória!"],
    enum: {
      values: ["Musculação", "Funcional", "Dança"],
      Message: "A modalidade deve ser Musculação, Funcional ou Dança!",
    },
  },
  plano: {
    type: String,
    requerid: [true, "A modalidade é obrigatória!"],
    enum: {
      values: ["Mensal", "Trimestral", "Semestral"],
      Message: "O plano deve ser Mensal, Trimestral ou Semestral!",
    },

    DataMatricula: {
      type: String,
      requerid: [true, "A data de matrícula é obrigatória!"],
    },

    ValorMensal: {
      type: Number,
    },

    ValorTotal: {
      type: Number,
    },

    status: {
      type: String,
      default: "Ativa",
      enum: {
        values: ["Ativa", "Pausada", "Cancelada"],
      },
    },
  },
});

const Matricula = mongoose.model("Matricula", matriculas);

export default Matricula