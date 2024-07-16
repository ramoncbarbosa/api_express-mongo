import notFound from "../errors/notFound.js";
import Autor from "../models/Author.js";

class AuthorController {
  static listarAutores = async (req, res) => {
    try {
      const listaAuthor = await Autor.find({});
      res.status(200).json(listaAuthor);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Falha na Requisição` });
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autorLocalizado = await Autor.findById(id);
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
      const newAuthor = await Autor.create(req.body);
      res.status(201).json({ message: "Autor criado com sucesso", autor: newAuthor });
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      await Autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Atualização do Autor realizada com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  };

  static deletarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      await Autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor deletado com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  };
}

export default AuthorController;
