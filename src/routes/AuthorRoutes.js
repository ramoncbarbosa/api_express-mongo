import express from "express";
import AuthorController from "../controllers/AuthorController.js";

const routes = express.Router();

routes
  .get("/autores", AuthorController.listarAutores)
  .get("/autores/:id", AuthorController.listarAutorPorId)
  .post("/autores", AuthorController.cadastrarAutores)
  .put("/autores/:id", AuthorController.atualizarAutorPorId)
  .delete("/autores/:id", AuthorController.deletarAutor);

export default routes;