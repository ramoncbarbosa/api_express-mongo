import mongoose from 'mongoose';

const livroScheme = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    editora: {type: String, required: false},
    prece: {type: Number, required: false},
    numeroPaginas: {type: Number, required: false},
}, {versionKey: false})

const livro = mongoose.model("livros", livroScheme);

export  default livro;