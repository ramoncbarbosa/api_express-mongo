import notFound from "../errors/notFound.js";
import {Author, Books} from "../models/index.js";
import incorrectRequest from "../errors/incorrectRequest.js";

class BooksController {
  static listarLivros = async (req, res, next) => {
    try {
      //metodos para paginação para mostrar quantos dados quero mostrar por página
      let { limite = 10, page = 1 } = req.query; 
      limite = parseInt(limite);
      page = parseInt(page);

      if(limite > 0 && page > 0){
        const listaLivros = await Books.find({})
          .skip((page-1) * limite)
          .limit(limite)
          .populate("autor")
          .exec();

        res.status(200).json(listaLivros);
      } else{
        next(new incorrectRequest());
      }
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


  static listarLivrosPorSearch = async (req, res, next) => {
    try {
      const search = await searchParametros(req.query);
      if(search !== null){
        const resFilter = await Books.find(search).populate("autor", "nome");
        res.status(200).json(resFilter);
      } else{
        res.status(200).send([]);
      }
    } catch (erro) {
      next(erro);
    }
  };  
   
}

async function searchParametros(parametros){
  const { editora, titulo, minPages, maxPages, nomeAutor } = parametros;
  let search = {};

  if (editora) search.editora = editora;

  if (titulo) search.titulo = { $regex: titulo, $options: "i" };

  if (minPages || maxPages) search.numeroPaginas = {};
  if (minPages) search.numeroPaginas.$gte = minPages;
  if (maxPages) search.numeroPaginas.$lte = maxPages;

  if (nomeAutor) {
    const autor = await Author.findOne({ nome: nomeAutor });
    if (autor) {
      search.autor = autor._id;
    } else {
      console.log(`Autor "${nomeAutor}" não encontrado.`);
      search = null;
    }
  }

  return search;
}




export default BooksController;
