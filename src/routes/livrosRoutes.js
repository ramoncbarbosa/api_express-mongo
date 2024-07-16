import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.listarLivrosPorEditora)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivroPorId)
  .delete("/livros/:id", LivroController.excluirLivro);

export default routes;
