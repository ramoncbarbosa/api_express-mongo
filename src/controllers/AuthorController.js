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

  static listarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;
      const autorLocalizado = await Autor.findById(id);
      res.status(200).json(autorLocalizado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Falha na Requisição de Buscar o Autor` });
    }
  };

  static cadastrarAutores = async (req, res) => {
    try {
      const newAuthor = await Autor.create(req.body);
      res.status(201).json({ message: "Autor criado com sucesso", autor: newAuthor });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Falha na Requisição` });
    }
  };

  static atualizarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;
      await Autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Atualização do Autor realizada com sucesso!" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Falha na Atualização do Autor` });
    }
  };

  static deletarAutor = async (req, res) => {
    try {
      const id = req.params.id;
      await Autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor deletado com sucesso!" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Falha ao Deletar o Autor` });
    }
  };
}

export default AuthorController;
