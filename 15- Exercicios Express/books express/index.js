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

    if(index === -1){
        return res.status(404).send({error:"Erro! Livro não encontrado"})
    }

  livros[index].titulo = titulo || livros[index].titulo;
  livros[index].autor = autor || livros[index].autor;
  livros[index].ano = ano || livros[index].ano;
  livros[index].genero = genero || livros[index].genero;

    res.status(200).send(livros[index]);
})

//DELETE

router.delete("/livros/:id" , (req, res) => {
  const id =  parseInt(req.params.id)
  const index = livros.findIndex((livros) => livros.id === id)

  if(index === -1){
    return res.status(405).send({error:"Erro! Livro não cadastrado."})
  }

  livros.splice(index, 1)

  res.status(200).send({menssage:"Livro removido com sucesso!"})
})

//GET (QUERY PARAMS)

router.get("/livros/busca", (req,res) => {
  const {titulo, autor, ano, genero} = req.query
  let livrosFiltrados = livros


  if(titulo){
    livrosFiltrados = livrosFiltrados.filter((livro) =>  titulo.toLowerCase().includes(titulo.toLowerCase()))
  }

  if(autor){
    livrosFiltrados = livrosFiltrados.filter((livro) => autor.toLowerCase().includes(autor.toLowerCase()))
  }

  if(ano){
    livrosFiltrados = livrosFiltrados.filter((livro) => ano === parseInt(ano))
  }

  if(genero){
    livrosFiltrados = livrosFiltrados.filte((livro) => genero.toLowerCase().includes(genero.toLowerCase()))
  }

  res.status(200).send(livrosFiltrados)
})

router.listen(porta, () => {
  console.log("O servidor esta rodando na porta" + porta);
  
})

