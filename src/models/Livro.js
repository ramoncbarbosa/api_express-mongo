import mongoose from 'mongoose';

const livroScheme = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    titulo: { type: String, required: true },
    editora: { type: String, required: false },
    preco: { type: Number, required: false },
    numeroPaginas: { type: Number, required: false },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores' },
}, { versionKey: false });

const Livro = mongoose.model("livros", livroScheme);

export default Livro;
