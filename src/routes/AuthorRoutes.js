import express from "express";
import AuthorController from "../controllers/AuthorController.js";

const routes = express.Router();

routes.get("/autores", AuthorController.listarAutores);
routes.get("/autores/:id", AuthorController.listarAutorPorId);
routes.post("/autores", AuthorController.cadastrarAutores);
routes.put("/autores/:id", AuthorController.atualizarAutorPorId);
routes.delete("/autores/:id", AuthorController.deletarAutor);

export default routes;
