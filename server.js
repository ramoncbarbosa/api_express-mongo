import http from 'http';


//posta a qual sera usada
const PORT = 3000;

//conjunto de rotas
const rotas = {
  "/": "Curso de Express API",
  "/livros": "Entrei na Rota Livros",
  "/autores": "Entrei na Rota Autores"
}

const server = http.createServer((req, res)=>{
  //header ou cabecalho de um protocolo http
  res.writeHead(200, {"Context-Type": "text/plain"});
  //
  res.end(rotas[req.url])
})

//listen de ouvir, ouvir nosso servidor
server.listen(PORT, ()=>{
  console.log("servidor sendo escutado/visto");
})