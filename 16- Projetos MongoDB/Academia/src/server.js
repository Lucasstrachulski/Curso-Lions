import express from "express";
import Matricula from "./models/matricula.js";
import conectarDB from "./db.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import CalcularValor from "./utils/CalculoValorTotal.js";
import CalcularValorMensal from "./utils/CalculoValorMensal.js";


dotenv.config({ path: "../.env" });
const app = express();
const porta = process.env.porta;
conectarDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "API da academia está no ar!" });
});

app.post("/Matricula", async (req, res) => {
  try {
    const {NomeAluno,Idade,Modalidade,plano,DataMatricula,status,} = req.body;

    const ValorTotal = CalcularValor(plano, Modalidade);
    const ValorMensal = CalcularValorMensal(plano, Modalidade)

    
    let valor = 0;
    switch (ValorMensal) {
      case "Musculação":
        valor = 90;
        break;

      case "Funcional":
        valor = 120;
        break;
      case "Dança":
        valor = 100;
        break;

      default:
        break;
    }
    


    const NovaMatricula = new Matricula({
      NomeAluno,
      Idade,
      Modalidade,
      plano,
      DataMatricula,
      ValorMensal,
      ValorTotal,
      status,
    });
    
    await NovaMatricula.save()

    res.status(201).json({mensagem: "Matricula cadastrada",matriculas: NovaMatricula});

  } catch (erro) {

    res.status(400).json({ mensagem: `Erro ao cadastrar a Matricula: ${erro.message}` });
  }
});

app.listen(porta, () => {
  console.log(`Conectado com a porta ${porta} com sucesso!`);
});
