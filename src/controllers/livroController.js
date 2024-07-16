import Livro from "../models/Livro.js";

class LivroController {
  static listarLivros = async (req, res, next) => {
    try {
      const listaLivros = await Livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroLocalizado = await Livro.findById(id);
      res.status(200).json(livroLocalizado);
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      const newBook = await Livro.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", livro: newBook });
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      await Livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Atualização Realizada Com Sucesso!" });
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      await Livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro Deletado com Sucesso!" });
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivrosPorEditora = async (req, res, next) => {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await Livro.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    } catch (erro) {
      next(erro);
    }
  };
}

export default LivroController;
