import mongoose from "mongoose";

//middleware de erro para tratamento de erros na aplicação de AuthorController e livroControoller
// eslint-disable-next-line no-unused-vars
export default function managerErros(erro, req, res, next){
  if(erro instanceof mongoose.Error.CastError){
    res.status(400).send({message: "Um ou Mais Dados Fornecidos Estão Incorretos"});
  } else{
    res.status(500).send({message: `${erro.message} - Erro Interno no Servidor`});
  }
}