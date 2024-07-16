import mongoose from "mongoose";

const bookScheme = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,  
  //ao envolver em método de array o dado do required, também se pode personalizar por exemplo o que saíra como mensagem caso não respeitem o required
  titulo: { type: String, required: [true, "O Título do Livro é Obrigatório!"] },
  editora: { type: String, required: [true, "A Editora é Obrigatória!"] },
  preco: { type: Number, required: false },
  numeroPaginas: { type: Number, required: false },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "O Nome do(a) Autor(a) é Obrigatório!"]},
}, { versionKey: false });

const Book = mongoose.model("books", bookScheme);

export default Book;
