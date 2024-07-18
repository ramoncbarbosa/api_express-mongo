import express from "express";
import BooksController from "../controllers/BooksController.js";
import pagination from "../middleware/pagination.js";

const routes = express.Router();

routes
  .get("/livros", BooksController.listarLivros, pagination)
  .get("/livros/busca", BooksController.listarLivrosPorSearch, pagination)
  .get("/livros/:id", BooksController.listarLivroPorId)
  .post("/livros", BooksController.cadastrarLivro)
  .put("/livros/:id", BooksController.atualizarLivroPorId)
  .delete("/livros/:id", BooksController.excluirLivro);

export default routes;
