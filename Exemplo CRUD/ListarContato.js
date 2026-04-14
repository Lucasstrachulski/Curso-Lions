function listarContato(contatos){
    if(contatos.length === 0 ) {
        console.log("Nenhu, contato cadastrado!");
        return
    }

    contatos.forEach(contato => {
        console.log(`\nId: ${contato.id}`);
        console.log(`Nome: ${contato.nome}`);
        console.log(`Email: ${contato.email}`);
        console.log(`Telefones: ${contato.telefones.join(" | ")}`);
    })
}

export default listarContato