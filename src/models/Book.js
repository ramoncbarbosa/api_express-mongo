import mongoose from "mongoose";

const bookScheme = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,  
  //ao envolver em método de array o dado do required, também se pode personalizar por exemplo o que saíra como mensagem caso não respeitem o required
  titulo: { type: String, required: [true, "O Título do Livro é Obrigatório!"] },
  editora: { type: String, required: [true, "A Editora é Obrigatória!"],
    enum: {values: ["Dream House"], message: "A Editora {VALUE} Não É um Valor Permitido!"} },
  preco: { type: Number, required: false },
  numeroPaginas: { type: Number,
    min: [100, "O Número de Páginas deve estar entre 100 e 5.000. Valor fornecido {VALUE} "],
    max: [5000, "O Número de Páginas deve estar entre 100 e 5.000. Valor fornecido {VALUE} "],
    required: false },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "O Nome do(a) Autor(a) é Obrigatório!"]},
}, { versionKey: false });

const Book = mongoose.model("books", bookScheme);

export default Book;
