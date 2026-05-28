import express from "express";
import {filmes} from  "./filmes.js";

const router = express();
const porta = 3000

let id = 0;

//Post (CREATE)

router.post("/filmes/criar", (req, res) => {

    const{titulo, diretor, ano, genero} = req.body

    if(!titulo | !diretor | !ano | !genero){
        return res.status(400).send({menssage: "Todos os campos (titulo, diretor, ano, genero) são obrigatorios!"})
    }

    if(filmes.length === 0){
        id = 1
    } else{
        id  = filmes[filmes.length - 1].id + 1
    }

    const novoFilme = {
        id,
        titulo,
        diretor,
        ano,
        genero
    }

filmes.push(novoFilme)

res.status(201).send({menssage:"Novo filme cadastrado!"})

})

//Get( Listar )

router.get("/filmes/listar", (req, res) => {
    res.status(200).send({menssage: "Filmes listados!", Filmes:filmes})
})

//Put(Update)

router.put("/filmes/:id", (req, res) => {
    const {titulo, diretor, ano, genero} = req.body
     const id = parseInt(req.params.id);

     const index = filmes.findIndex((filmes) => filmes.id === id)

     if(index === -1){
        return res.status(400).send({error:"ERROR:Id não encontado"})
     }

     filmes[index].titulo = titulo || filmes[index].filmes;
     filmes[index].diretor = diretor || filmes[index].diretor
     filmes[index].ano = ano || filmes[index].ano
     filmes[index].genero = genero || filmes[index].genero

     res.status(200).send({menssage:"Filmes cadastrado com sucesso!"})
})

//Delete(Delete)

router.detele("/filmes/:id", (req,res) => {
    const id = parseInt(req.params.id);

    const index = filmes.findIndex((filmes) => filmes.id === id)

    if(index === -1){
        return res.status(404).send({error:"Error: Filme não cadastrado! "})
    }
    const data  = filmes[index]
    filmes.splice(index,1)

    res.status(200).send({menssage:"Filme removido com sucesso!"})
})

//Busca

router.get("/filmes/:busca", (req,res) => {
const{titulo, diretor, ano, genero} = req.body
let resultados = filmes;

if(titulo){
    resultados= resultados.filter((f) => f.titulo.toLowerCase().includes(titulo.toLowerCase()));
}

if(diretor){
    resultados = resultados.filter((f) => f.diretor.toLowerCase().includes(diretor.toLowerCase()));
}

if(ano){
    resultados = resultados.filter((f) => f.ano === parseInt(ano))
}

if(genero){
    resultados = resultados.filter((f) => f.genero.toLowerCase().includes(genero.toLowerCase()));
}
res.status(200).send(resultados)

})

//Iniciando o Server
app.listen(porta, () => {
    console.log(`Servidor de filmes rodando em http://localhost:${porta}`);
    
})
