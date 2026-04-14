function atualizarContato(contatos, id, novosDados) {
  const indice = contatos.findIndex((contato) => contato.id === id);

  if (indice === -1) {
    console.log("Erro: Contato não encontrado!");
    return false;
  }

  //Validação de email na atualização
  if (novosDados.email) {
    let emailEmUso = false;
    for (let i = 0; i < contatos.length; i++) {
      let contatoAtual = contatos[i];
      //Verificar se o email é igual ao digitado E se não é própio usuário atualizado
      if (contatoAtual.email === novosDados.email && contatoAtual.id !== id) {
        emailEmUso = true;
        break;
      }
    }
    if (emailEmUso) {
      console.log("Erro: O novo email ja está em uso por outro usuário!");
      return false;
    }
  }

  //Atualiza apenas os campos preenchidos
  contatos[indice].nome = novosDados.nome || contatos[indice].nome;
  contatos[indice].email = novosDados.email || contatos[indice].email;
  //Se o usuario digitou novos telefones (o array é maior que zero), nós substituimos
  if (novosDados.telefones.length > 0) {
    contatos[indice].telefones = novosDados.telefones;
  }
  return true;
}
