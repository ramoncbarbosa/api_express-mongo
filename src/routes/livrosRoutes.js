import express from "express";
import livroController from "../controllers/livroController.js";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
