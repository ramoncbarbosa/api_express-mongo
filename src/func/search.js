import { Author } from "../models/index.js";

export default async function searchParametros(parametros){
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
