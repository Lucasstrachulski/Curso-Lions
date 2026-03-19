const prompt = require('prompt-sync')();

let estoque = [];
let continuar = true;

while(continuar){
    console.log("---Menu de Estoque---")
    console.log("1- Adicionar Itens");
    console.log("2 - Listar Itens");
    console.log("3- Sair");
   
    let opcao = prompt("Digite uma opção! R: ")
    

    switch (opcao) {
        case "1":
            let nome = prompt("Digite o nome do produto! R: ")
            let quantidade =parseInt(prompt("Digite a quantidade disponivel no estoque! R: "))

            estoque.push({"Nome":nome,"Quantidade":quantidade})
            console.log(("Itens adicionados com sucesso! "));

            break;
    case "2":
        console.log(estoque)
        break;

        case "3":
            console.log("Saindo do sistema!");
            continuar = false;
            break;
        default:

            break;
    }



 
console.log(`O produto escolhido foi ${estoque[0].Nome} e a quantidade é de ${estoque[0].Quantidade}`)

}


