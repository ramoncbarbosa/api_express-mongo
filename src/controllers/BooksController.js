import notFound from "../errors/notFound.js";
import Books from "../models/Book.js";

class BooksController {
  static listarLivros = async (req, res, next) => {
    try {
      const listaLivros = await Books.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroLocalizado = await Books.findById(id).populate("autor", "nome").exec();
      if(livroLocalizado !== null){
        res.status(200).json(livroLocalizado);
      } else{
        next(new notFound("Id do Livro não localizado!"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      const newBook = await Books.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", livro: newBook });
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const updateBook = await Books.findByIdAndUpdate(id, req.body);
      if(updateBook !== null){
        res.status(200).json({ message: "Atualização Realizada Com Sucesso!" });
      } else{
        next(notFound("Id do Livro não foi lozalizado!"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      const deleteBook = await Books.findByIdAndDelete(id);
      if(deleteBook !== null){
        res.status(200).json({ message: "Livro Deletado com Sucesso!" });
      } else{
        next(notFound("Id do Livro não foi lozalizado!"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivrosPorEditora = async (req, res, next) => {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await Books.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    } catch (erro) {
      next(erro);
    }
  };
}

export default BooksController;
