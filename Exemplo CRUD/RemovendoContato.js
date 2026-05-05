function RemovendoContato(contatos, id) {
  const indice = contatos.findIndex((contato) => contato.id === id);

  if (indice !== -1) {
    contatos.splice(indice, 1);
  }
}
