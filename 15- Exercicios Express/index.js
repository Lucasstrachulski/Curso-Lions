import express from "express";
import estudantes from "./dados.js";

const router = express();
const porta = 3000;

router.use(express.json());

let id = 0;
//herobrine = true

//Put (CREATE)
router.post("/estudantes/criar", (req, res) => {
  const { nome, matricula, curso, ano } = req.body;

  if (!nome || !matricula || !curso || !ano) {
    return res.status(400).send({
      menssage:
        "Todos os campos (nome, matricula, curso, ano) são obrigatórios.",
    });
  }

  if (estudantes.length === 0) {
    id = 1;
  } else {
    id = estudantes[estudantes.length - 1].id + 1;
  }

  const novoEstudante = {
    id,
    nome,
    matricula,
    curso,
    ano,
  };

  estudantes.push(novoEstudante);

  res
    .status(201)
    .send({
      message: "Estudante criado com sucesso!",
      estudanteNovo: novoEstudante,
    });
});

// Get(READ)
router.get("/estudantes", (req, res) => {
  res
    .status(200)
    .send({ menssage: "Estudantes listados!", alunos: estudantes });
});

//Put(UPDATE)
router.put("/estudantes/:id", (req, res) => {
  const { nome, matricula, curso, ano } = req.body;
  const id = parseInt(req.params.id);

  const index = estudantes.findIndex((estudantes) => estudantes.id === id);

  if (index === -1) {
   return res.status(404).send({ error: "ERROR: Id não cadastrado!" });
  }

  estudantes[index].nome = nome || estudantes[index].nome;
  estudantes[index].matricula = matricula || estudantes[index].matricula;
  estudantes[index].curso = curso || estudantes[index].curso;
  estudantes[index].ano = ano || estudantes[index].ano;

  res.status(200).send({ menssage: "Estudante atualizado!" });
});

//Delete
router.delete("/estudantes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = estudantes.findIndex((estudante) => estudantes.id === id);

  if (index === -1) {
    return res.status(404).send({ menssage: " Estudante não encontrado!" });
  }

  const data = estudantes[index];
  estudantes.splice(index, 1);

  res.status(200).send({message: "Estudante removido com sucesso!",estudanteRemovido: data,});
});


router.get(("/estudantes/busca"), (req, res) => {
    const {nome,matricula, curso} = req.query

    if (nome) {
        const resultadoBusca = estudantes.filter((estudante) => estudante.nome.toLowerCase().includes(nome.toLowerCase()));
        return res.status(200).send({message: "Busca realizada com sucesso!", estudantesEncontrados: resultadoBusca});
      }

      if(matricula){
        const resultadoBusca = estudante.filter((estudante) => estudante.matricula.toLowerCase().includes(matricula.toLocaleLowerCase()));
        return res.status(200).send({message:"Busca realizada com sucesso!", estudantesEncontrados:resultadoBusca})
    }
    if (curso) {
        const resultadoBusca = estudantes.filter((estudante) => estudante.curso.toLowerCase().includes(curso.toLowerCase()));
        return res.status(200).send({message: "Busca realizada com sucesso!", estudantesEncontrados: resultadoBusca});
      }

      res.status(400).send({message: "O termo de busca é obrigatório!"});
})

router.listen(porta, () => {
  console.log("O servidor esta rodando na porta " + porta);
});
