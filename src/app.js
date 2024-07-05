import express, { json } from "express";

const app = express();

//middleware = utilizado para ter acesso a requisicoes e resposta e modificar algumas coisas, neste caso server para parsear as requisicoes de body, convertendo de string para json para poder lidar
app.use(express.json());

const livrosArray = [
  {
    id: 1,
    titulo: "O Senhor dos Aneis"
  },
  {
    id: 2,
    titulo: "O Hobbit"
  }
]


//funcao para buscar livros via id
function buscarLivros(id){
  return livrosArray.findIndex(livro => {
    //convertendo o id de string para numero
    return livro.id === Number(id)
  })
}

app.get("/", (req, res)=>{
  res.status(200).send("Curso de Express");
});

//status 200 = ok
app.get("/livros", (req, res)=>{
  res.status(200).json(livrosArray);
});

//buscando livro via id com a funcao de buscar livros por id no params
app.get("/livros/:id", (req, res)=>{
  const index = buscarLivros(req.params.id);
  res.status(200).json(livrosArray[index])
})

//adicionando livros com metodo post
app.post("/livros", (req, res)=>{
  livrosArray.push(req.body);
  //201 = cadastrado com sucesso
  res.status(201).send("livro cadastrado com sucesso")
});


//alterar ou atualizar um registro existente com metodo put
app.put("/livros/:id", (req, res)=>{
  const index = buscarLivros(req.params.id);
  //pegando o livro do id index com titulo e trocando por titulo
  livrosArray[index].titulo = req.body.titulo
  res.status(200).json(livrosArray);
})


//deletar um dado via id usando a funcao buscar livros para filtrar pelo id
// 200 para ok e 204 para quando deletamos algo
app.delete("/livros/:id", (req, res)=>{
  const index = buscarLivros(req.params.id);
  livrosArray.splice(index, 1);
  res.status(204).send("Livro removido com sucesso");
})

export default app;