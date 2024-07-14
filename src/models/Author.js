import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  nome: { type: String, required: true },
  nacionalidade: { type: String, required: false },
}, { versionKey: false });

const Autor = mongoose.model("autores", authorSchema);

export default Autor;
