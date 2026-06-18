import mongoose from "mongoose";

const material = new mongoose.Schema({
  Titulo: {
    type: String,
    required: [true, "O titulo é obrigatorio"],
  },

  Tipo: {
    type: String,
    required: [true, "O tipo é obrigatório!"],
    enum: {
      values: ["Livro", "Revista", "Apostila"],
      message: "O tipo deve ser Livro, Revista ou Apostila",
    },
  },

  Autor: {
    type: String,
    required: [true, "O autor deve ser obrigatório!"],
  },
  Estoque: {
    type: Number,
    required: [true, "O estoque é obrigatório"],
  },
});
