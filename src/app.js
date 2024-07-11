import express from "express";
import conectaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDatabase();

conexao.on("error", (erro)=>{
  console.error("error de conexão:", erro);
});

conexao.once("open", ()=>{
  console.log("conexão com o banco realizada com sucesso");
})

const app = express();
routes(app);

app.get("/livros/:id", (req, res)=>{
  const index = buscarLivros(req.params.id);
  res.status(200).json(livros[index])
})

app.post("/livros", (req, res)=>{
  livros.push(req.body);
  res.status(201).send("livro cadastrado com sucesso")
});


app.put("/livros/:id", (req, res)=>{
  const index = buscarLivros(req.params.id);
  livros[index].titulo = req.body.titulo
  res.status(200).json(livros);
})


app.delete("/livros/:id", (req, res)=>{
  const index = buscarLivros(req.params.id);
  livrosArray.splice(index, 1);
  res.status(200).send("Livro removido com sucesso");
})

export default app;