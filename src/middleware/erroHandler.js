import mongoose from "mongoose";

//middleware de erro para tratamento de erros na aplicação de AuthorController e livroControoller
// eslint-disable-next-line no-unused-vars
export default function managerErros(erro, req, res, next){
  if(erro instanceof mongoose.Error.CastError){
    res.status(400).send({message: "Um ou Mais Dados Fornecidos Estão Incorretos"});
  } else if(erro instanceof mongoose.Error.ValidationError){
    //fazendo um tratamento de erros pegando o que vier no terminal/node e mapeando eles para guardadar e juntar todos dentro da variavel messageError
    //isso deixar o erro mais compreensível para o front-end
    const messageError = Object.values(erro.errors).map(erro => erro.message).join("; ");

    res.status(400).send({message: `Os Seguintes Erros Foram Encontrados: ${messageError}`});
  } else{
    res.status(500).send({message: `${erro.message} - Erro Interno no Servidor`});
  }
}