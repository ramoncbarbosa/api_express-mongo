import notFound from "../errors/notFound.js";
import {Author} from "../models/index.js";

class AuthorController {
  static listarAutores = async (req, res, next) => {
    try {
      const listaAuthor = Author.find({});
      req.result = listaAuthor;
      next(); //middleware pagination
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Falha na Requisição` });
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autorLocalizado = await Author.findById(id);
      if(autorLocalizado !== null){
        res.status(200).send(autorLocalizado);
      } else{
        next(new notFound("Falha na Requisição de Buscar o Autor, o ID Não Foi Lozalicado" ));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarAutores = async (req, res, next) => {
    try {
      const newAuthor = await Author.create(req.body);
      res.status(201).json({ message: "Autor criado com sucesso", autor: newAuthor });
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const authorRes = await Author.findByIdAndUpdate(id, req.body);
      if(authorRes !== null){
        res.status(200).json({ message: "Atualização do Autor realizada com sucesso!" });
      } else{
        next(new notFound("Id do Autor não Localizado"));
      } 
    }catch (erro) {
      next(erro);
    }
  };

  static deletarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const resultado = await Author.findByIdAndDelete(id);
      if(resultado !== null){
        res.status(200).json({ message: "Autor deletado com sucesso!" });
      } else{
        next(new notFound("Id do Autor não Localizado"));
      }
    } catch (erro) {
      next(erro);
    }
  };
}

export default AuthorController;
