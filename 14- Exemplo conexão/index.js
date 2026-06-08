import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import VendaMensal from "./VendaMensal.js";

dotenv.config();

const app = express();
const porta = 3000;

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Conectado ao Mongo DB`);
  } catch (error) {
    console.log("Erro ao conectar com o  Mongo DB", error);
  }
};

connectDB();

//CREATE
app.post("/vendas", async (req, res) => {
  try {
    const novaVendaMensal = await VendaMensal.create(req.body);
    res.json(novaVendaMensal);
  } catch (error) {
    res.send(error);
  }
});

//READ
app.get("/vendas", async (req, res) => {
  try {
    const vendasMensais = await VendaMensal.find();
    res.json(novaVendaMensal);
  } catch (error) {
    res.send(error);
  }
});

//UPDATE

app.put("/vendas/:id", async (req, res) => {
  try {
    const novaVendaMensal = await VendaMensal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { ney: true },
    );
    res.json(novaVendaMensal);
  } catch (error) {
    res.send(error);
  }
});

//DELETE

app.delete("/vendas/:id", async (req, res) => {
  try {
    const VendaExcluida = await VendaMensal.findByIdAndDelete(req.params.id);
    res.json(VendaExcluida);
  } catch (error) {
    res.send(error);
  }
});

app.listen(porta, () =>
  console.log(`O servidor está rodando na porta ${porta}`),
);
