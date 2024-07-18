import express from "express";
import AuthorController from "../controllers/AuthorController.js";
import pagination from "../middleware/pagination.js";

const routes = express.Router();

routes
  .get("/autores", AuthorController.listarAutores, pagination)
  .get("/autores/:id", AuthorController.listarAutorPorId)
  .post("/autores", AuthorController.cadastrarAutores)
  .put("/autores/:id", AuthorController.atualizarAutorPorId)
  .delete("/autores/:id", AuthorController.deletarAutor);

export default routes;