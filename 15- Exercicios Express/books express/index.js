import express from "express";
import livros from "./livros.js";

const router = express();
const porta = 3000;

let proximoID = 0;

//POST

router.post("/livros/criar", (req, res) => {
  const { titulo, autor, ano, genero } = req.body;

  if (!titulo | !autor | !ano | !genero) {
    return res.status(400).send({ menssage: "Todos os campos precisam ser preenchidos!" });
  }

  if (livros.lenghth === 0) {
    proximoID = 1;
  } else {
    proximoID = livros[livros.length - 1] + 1;
  }

  const novoLivro = {
    titulo,
    autor,
    ano,
    genero,
  };

  livros.push(novoLivro);

  res.status(201).send({ menssage: "Livro adicionado com sucesso!" + livros.titulo });
});

//READ

router.get("/livros/listar", (req, res) => {
    res.status(200).send({menssage:"Livros listados!" + livros})
});

//PUT

router.put("/livros/:id" , (req, res)  => {
    const{titulo, autor, ano, genero} = req.body
    const id = parseInt(req.params.id)

    const index = livros.findIndex((livros) => livros.id === id)

    if(!index){
        return res.status(404).send({error:"Erro! Livro não encontrado"})
    }

    //Parei na parte de atualizar os campos titulo, autor, ano ou genero!
})
