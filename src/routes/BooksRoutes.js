import express from "express";
import BooksController from "../controllers/BooksController.js";

const routes = express.Router();

routes
  .get("/livros", BooksController.listarLivros)
  .get("/livros/busca", BooksController.listarLivrosPorSearch)
  .get("/livros/:id", BooksController.listarLivroPorId)
  .post("/livros", BooksController.cadastrarLivro)
  .put("/livros/:id", BooksController.atualizarLivroPorId)
  .delete("/livros/:id", BooksController.excluirLivro);

export default routes;
