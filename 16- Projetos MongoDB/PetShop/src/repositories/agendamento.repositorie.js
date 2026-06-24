import Agendamento from "../models/agendamento.js";

async function Post(dadosAgentamento) {
    return Agendamento.create(dadosAgentamento)
}

const AgendamentoRepository = {
    Post
}

export default AgendamentoRepository