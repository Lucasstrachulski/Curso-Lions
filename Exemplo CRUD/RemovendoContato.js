function RemovendoContato(contatos, id) {
  const indice = contatos.findIndex((contato) => contato.id == id);

  if (indice !== -1) {
    let contatoRemovido = contatos[indice];
    contatos.splice(indice, 1);
    return { data: contatoRemovido };
  }
  return { error: "Id não removido!" };
}

export default RemovendoContato;
