function adicionarContato(contatos, novoContato) {

    //Validação: Não permitir email duplicado
    let emailExiste = false
    for (let i = 0; i < contatos.length; i++){
        if(contatos[i].email === novoContato.email){
            emailExiste = true
            //Para a busca assim que encontrar
            break
        }
    }
    if(emailExiste){
        console.log("Erro: Este email já está registrado!");
        return
    }

    //Gerar ID sequencial (pega o ultimo ID e soma 1)
    if(contatos.length > 0 ){
        let ultimoContato = contatos[contatos.length - 1]
        novoContato.id = ultimoContato.id + 1
    } else {
        //Se a lista estiver vazia, ele é o primeiro
        novoContato.is = 1
    }
    contatos.push(novoContato)
    return
}

export default adicionarContato