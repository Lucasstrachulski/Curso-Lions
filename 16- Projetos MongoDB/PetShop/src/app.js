import express from "express";
import AgendamentoRouter from "./routes/Agendamento.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.json({mensagem:"API dopetshop está no ar!"})
})

app.use(AgendamentoRouter);

export default app;