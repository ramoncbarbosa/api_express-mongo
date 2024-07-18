import mongoose from "mongoose";

const bookScheme = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  titulo: { type: String, required: [true, "O Título do Livro é Obrigatório!"] },
  editora: { 
    type: String, 
    required: [true, "A Editora é Obrigatória!"],
    // enum: { 
    //   values: ["Dream House"], 
    //   message: "A Editora {VALUE} Não É um Valor Permitido!" 
    // } 
  },
  preco: { type: Number, required: false },
  numeroPaginas: {
    type: Number,
    validate: {
      validator: (valor) => {
        return valor >= 100 && valor <= 5000; 
      },
      message: "O Número de Páginas Deve Estar Entre 100 e 5000. Você Passou o Valor de: {VALUE}"
    },
    required: false
  },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [false, "O Autor é Obrigatório!"] },
}, { versionKey: false });

const Book = mongoose.model("books", bookScheme);

export default Book;
