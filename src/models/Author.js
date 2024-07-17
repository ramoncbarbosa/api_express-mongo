import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  //ao envolver em método de array o dado do required, também se pode personalizar por exemplo o que saíra como mensagem caso não respeitem o required
  nome: { type: String, required: [true, "O Nome do(a) Autor(a) é Obrigatório!"] },
  nacionalidade: { type: String, required: false },
}, { versionKey: false });

const Autor = mongoose.model("autores", authorSchema);

export default Autor;
