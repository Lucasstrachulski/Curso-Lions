import mongoose from "mongoose";

const matriculas = new mongoose.Schema({
  NomeAluno: {
    type: String,
    requerid: [true, "O nome é obrigatório!"],
  },

  Idade:{
    type: Number,
    requerid: [true, "A idade é obrigatória!"]
  },
  Modalidade:{
    type: String,
    requerid: [true, "A modalidade é obrigatória!"],
    enum:{
        values:[Musculação, Funcional, Dança],
        Message:"A modalidade deve ser Musculação, Funcional ou Dança!"
    }
  }
});
