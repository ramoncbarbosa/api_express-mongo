import express from "express";
import AuthorController from "../controllers/AuthorController.js";

const routes = express.Router();

// router.get("/autores", AuthorController.listarAutores);
// router.get("/autores/:id", AuthorController.listarAutorPorId);
// router.post("/autores", AuthorController.cadastrarAutores);
// router.put("/autores/:id", AuthorController.atualizarAutorPorId);
// router.delete("/autores/:id", AuthorController.deletarAutor);


routes
  .get("/autores", AuthorController.listarAutores)
  .get("/autores/:id", AuthorController.listarAutorPorId)
  .post("/autores", AuthorController.cadastrarAutores)
  .put("/autores/:id", AuthorController.atualizarAutorPorId)
  .delete("/autores/:id", AuthorController.deletarAutor);

export default routes;