import express from "express";
import books from "./BooksRoutes.js";
import autores from "./AuthorRoutes.js";

const routes = (app) =>{
  app.route("./")
    .get((req,res)=> res.status(200)
      .send("Curso de NodeJs com Express"));

  app.use(express.json(),
    books, 
    autores);
};

export default routes;


//responsavel por dar para o express as minhas rotas criadas com os arquivos Controller